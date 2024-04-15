import { catchAsyncError } from '../../../utils/error.handler.js'
import categoryModel from '../../product/models/category.model.js'
import { makeImage } from '../utils/image.utils.js'

export const attachImage = (fieldName) =>
	catchAsyncError(async (req, res, next) => {
		const {categorySlug}=req.params
		if(req.method==='PUT')
		{
		const category=await categoryModel.findOne({slug:categorySlug})
		if(!category)
		{
			res.status(404).json({message:"there is no category by this name"})
			return next()
		}
	    }
		if (!req.file) return next()
		const image = await makeImage(req.file.path)
		console.log("iam here")
		req.body[fieldName]  = image._id
		next()
	})