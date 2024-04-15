import { catchAsyncError } from "../../../utils/error.handler.js";
import userModel from "../models/user.model.js";

export const getWishlist = catchAsyncError(async (req, res) => {
	const { wishlist } = await userModel.findById(req.user.id)
	res.json({ wishlist })
})

export const updateWishlist = catchAsyncError(async (req, res) => {
	const { product_id } = req.body
	const user = await userModel.findById(req.user.id)

	const indexOfProduct = user.wishlist.findIndex(
		({ _id }) => _id.toString() === product_id
	)

	if (indexOfProduct === -1) user.wishlist.push(product_id)
	else user.wishlist.splice(indexOfProduct, 1)

	await user.save()

	res.json({ message: 'Wishlist updated successfully' })
})
