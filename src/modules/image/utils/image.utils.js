import { catchAsyncError } from '../../../utils/error.handler.js'
import { uploadImage } from '../../../utils/image.js'
import imageModel from '../models/image.model.js'

export const makeImage =async (path) => {
	const { imageName, imageUrl } = await uploadImage(path)
	console.log({ imageName, imageUrl})
	return imageModel.create({ name: imageName, path: imageUrl })
}
