import express from 'express'

import productModel from '../models/product.model.js'
import { catchAsyncError } from '../../../utils/error.handler.js'
import { makeImage } from '../../image/utils/image.utils.js'
import subcategoryModel from '../models/subcategory.model.js'
import imageOnProductModel from '../models/imageOnProduct.model.js'



export const getAllProduct=catchAsyncError(async(req,res,next)=>{
	const products = await productModel.find()
	res.json({ products })
})
export const getProduct = catchAsyncError(async (req, res, next) => {
	const product = await productModel.findOne({ slug: req.params.productSlug })
	res.json({ product })
})




export const addProductWithImages = catchAsyncError(async (req, res, next) => {
const product = await productModel.create(req.body)

	if (req.files?.images)
		await Promise.all(
			req.files.images.map(async (file) => {
				try {
					const image = await makeImage(file.path)
					await imageOnProductModel.create({
						image_id: image._id,
						product_id: product._id,
					})
				} catch (error) {
					return next(error)
				}
			})
		)
	res.status(201).json({
		message: `Added product with ${req.files.images?.length || 0} images`,
	})
})

export const updateProductWithImages = catchAsyncError(
	async (req, res, next) => {
		if (req.files?.images) {
			const product = await productModel.findOne({
				slug: req.params.productSlug,
			})
			await Promise.all(
				product.images.map(async (image) => {
					try {
						await imageOnProductModel.findByIdAndDelete(image._id)
					} catch (error) {
						return next(error)
					}
				})
			)
			await Promise.all(
				req.files.images.map(async (file) => {
					try {
						const image = await makeImage(file.path)
						console.log(image)
						await imageOnProductModel.create({
							image_id: image._id,
							product_id: product._id,
						})
					} catch (error) {
						return next(error)
					}
				})
			)
		}
		await productModel
			.updateOne({}, req.body)
			.where({ slug: req.params.productSlug })
		res.json({
			message: `Updated product with ${
				req.files.images?.length || 0
			} images`,
		})
	}
)


export const deleteProduct = catchAsyncError(async (req, res, next) => {
	const product = await productModel.findOneAndDelete({
		slug: req.params.productSlug,
	})
	res.json({ product })
})
