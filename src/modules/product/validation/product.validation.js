import Joi from 'joi'

export const getProductSchema = Joi.object({
	body: {},
	params: { productSlug: Joi.string().required() },
	query: {},
})

export const addProductSchema = Joi.object({
	body: {
		title: Joi.string().min(3).max(200).trim().required(),
		description: Joi.string().min(3).max(10000).trim().required(),
		stock: Joi.number().min(0).required(),
		price: Joi.number().min(0.01).required(),
		discounted_price: Joi.number().min(0.01).required(),
		features: Joi.array().items(
			Joi.object({
				key: Joi.string().required(),
				value: Joi.string().required(),
			})
		),
		subcategory_id: Joi.string().hex().length(24).required(),
	},
	params: {},
	query: {},
	files: Joi.object().required(),
})

export const updateProductSchema = Joi.object({
	body: {
		title: Joi.string().min(3).max(200).trim(),
		description: Joi.string().min(3).max(10000).trim(),
		stock: Joi.number().min(0),
		price: Joi.number().min(0.01),
		discounted_price: Joi.number().min(0.01),
		features: Joi.array().items(
			Joi.object().keys({
				key: Joi.string().required(),
				value: Joi.string().required(),
			})
		),
		subcategory_id: Joi.string().hex().length(24),
	},
	params: { productSlug: Joi.string().required() },
	query: {},
	files: Joi.object(),
})

export const deleteProductSchema = Joi.object({
	body: {},
	params: { productSlug: Joi.string().required() },
	query: {},
})
