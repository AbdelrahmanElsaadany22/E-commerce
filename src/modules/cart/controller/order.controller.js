
import Stripe from 'stripe';
import { AppError, catchAsyncError } from "../../../utils/error.handler.js"
import productModel from "../../product/models/product.model.js"
import cartModel from "../models/cart.model.js"
import orderModel from "../models/order.model.js"
import dotenv from 'dotenv'

dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET);

export const getUserOrders=catchAsyncError(async(req,res)=>{
const orders=await orderModel.findOne({user_id:req.user.id})
res.json({orders})
})


export const makeCODorder=catchAsyncError(async(req,res)=>{
    const cart = await cartModel.findOne({ user_id: req.user.id })

	cart.products.forEach((product) => {
		if (product.product_id.stock < product.quantity)
			throw new AppError('Insufficient stock', 400)
	})

	const order = await orderModel.create({
		user_id: req.user.id,
		coupon: {
			discount: cart.coupon_id?.discount || 0,
		},
		products: cart.products.map(
			({ product_id: { title, price, discounted_price }, quantity }) => ({
				quantity,
				product: {
					title,
					price,
					discounted_price,
				},
			})
		),
		...req.body,
	})
	if (!order) throw new AppError('Order failed', 400)

	const bulkWriteOptions = cart.products.map(
		({ product_id: { _id }, quantity }) => ({
			updateOne: {
				filter: { _id },
				update: {
					$inc: {
						stock: -quantity,
					},
				},
			},
		})
	)

	await productModel.bulkWrite(bulkWriteOptions)


res.json({order}) 
})


export const makePaymentSession = catchAsyncError(async (req, res) => {
	const cart = await cartModel.findOne({ user_id: req.user.id })
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: {
					currency: 'EGP',
					unit_amount: cart.total_price * 100,
					product_data: {
						name: req.user.name,
					},
				},
				quantity: 1,
			},
		],
		mode: 'payment',
		client_reference_id: req.user.id,
		success_url: 'https://chat.openai.com/',
		cancel_url: 'https://chat.openai.com/',
		metadata:{
			address:req.body.address,
		},
		customer_email: req.user.email,
	})

	res.json({ session })
})



export const makeOnlineOrder=async(data)=>{
	const cart =cartModel.findOne({user_id})
	const order =await orderModel.create({
		user_id:data.client_reference_id,
		address:"cairo",//def
		coupon: {
			discount: cart.coupon_id?.discount || 0,
		},
		is_paid:true,
		products:cart.products.map(
			({ product_id: { title, price, discounted_price }, quantity }) => ({
				quantity,
				product: {
					title,
					price,
					discounted_price,
				},
			})
		),
		phone_number:'' //def
	})
	
}