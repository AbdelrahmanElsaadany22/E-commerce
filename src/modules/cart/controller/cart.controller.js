
import { catchAsyncError } from "../../../utils/error.handler.js";
import couponModel from "../../coupon/models/coupon.model.js";
import cartModel from "../models/cart.model.js";

export const getCart=catchAsyncError(async(req,res)=>{
    const cart=await cartModel.findOne({user_id:req.user.id})
    res.json({ cart })
})

export const addToCart=catchAsyncError(async(req,res)=>{
	const { product_id } = req.body
	const cart = await cartModel.findOne({ user_id: req.user.id })

	const productEntry = cart.products.find(
		(entry) => entry.product_id._id.toString() === product_id
	)

	if (!productEntry) cart.products.push({ product_id, quantity: 1 })
	else productEntry.quantity++
	await cart.save()

	res.json('Added successfully')
})


export const removeFromCart = catchAsyncError(async (req, res) => {
	const { product_id } = req.body
	const cart = await cartModel.findOne({ user_id: req.user.id })

	const productEntry = cart.products.find(
		(entry) => entry.product_id._id.toString() === product_id
	)

	if (!productEntry) throw new AppError('Product not found', 404)

	productEntry.quantity--

	if (productEntry.quantity === 0) cart.products.remove(productEntry)

	await cart.save()

	res.json('Removed successfully')
})
export const applyCoupon = catchAsyncError(async (req, res) => {
	const { code } = req.body
	const cart = await cartModel.findOne({ user_id: req.user.id })

	if (!code) {
		cart.coupon_id = null
		await cart.save()
		return res.json({ message: 'Coupon removed successfully' })
	}

	const coupon = await couponModel.findOne({
		code,
		expiry: { $gte: Date.now() },
	})

	if (!coupon) throw new AppError('Invalid Coupon', 400)

	cart.coupon_id = coupon._id
	await cart.save()
	res.json({ message: 'Coupon added successfully' })
})

