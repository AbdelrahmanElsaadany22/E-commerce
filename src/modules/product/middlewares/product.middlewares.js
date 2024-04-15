import { catchAsyncError } from '../../../utils/error.handler.js'
import { makeImage } from '../../image/utils/image.utils.js'
export const attachCoverImage = () =>
	catchAsyncError(async (req, res, next) => {
		console.log(req.files)
		if (!req.files?.cover_image) return next()
		const image = await makeImage(req.files.cover_image[0].path)
	    console.log(image)
	 	req.body.cover_image = image._id
		next()
	})
