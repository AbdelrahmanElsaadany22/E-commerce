import Joi from 'joi'
export const getAllBrandsSchema = Joi.object({
	body: {},
	params: {},
	query: {},
})

export const getBrandSchema = Joi.object({
	body: {},
	params: { brandSlug: Joi.string().required() },
	query: {},
})

export const addBrandSchema = Joi.object({
	body: {
		name: Joi.string().min(3).max(200).trim().required(),
	},
	params: {},
	query: {},
	file: Joi.object().required(),
})

export const updateBrandSchema = Joi.object({
	body: {
		name: Joi.string().min(3).max(200).trim(),
	},
	params: { brandSlug: Joi.string().required() },
	query: {},
	file: Joi.object(),
})

export const deleteBrandSchema = Joi.object({
	body: {},
	params: { brandSlug: Joi.string().required() },
	query: {},
})
