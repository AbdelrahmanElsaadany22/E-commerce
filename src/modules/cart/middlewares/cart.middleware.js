import { catchAsyncError } from "../../../utils/error.handler.js"
import cartModel from "../models/cart.model.js"





export const assertCart = catchAsyncError(async (req, res, next) => {
	const cart = await cartModel.findOne({ user_id: req.user.id })
	if (cart) return next()

	await cartModel.create({ user_id: req.user.id, products: [] })
	next()
})