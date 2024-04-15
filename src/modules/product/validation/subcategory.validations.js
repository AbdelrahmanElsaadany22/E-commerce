import Joi from 'joi'

export const getSubcategoriesSchema = Joi.object({
	body: {},
	params: {
		categorySlug: Joi.string().required(),
	},
	query: {},
})

export const getSubcategorySchema = Joi.object({
	body: {},
	params: {
		categorySlug: Joi.string().required(),
		subcategorySlug: Joi.string().required()
	},
	query: {},
})

export const addSubcategorySchema = Joi.object({
	body: {
		name: Joi.string().min(3).max(200).trim().required(),
	},
	params: { categorySlug: Joi.string().required() },
	query: {},
	files: Joi.object().required(),
})

export const updateSubcategorySchema = Joi.object({
	body: {
		name: Joi.string().min(3).max(200).trim(),
	},
	params: {
		subcategorySlug: Joi.string().required(),
		categorySlug: Joi.string().required(),
	},
	query: {},
	files: Joi.object(),
})

export const deleteSubcategorySchema = Joi.object({
	body: {},
	params: {
		subcategorySlug: Joi.string().required(),
		categorySlug: Joi.string().required(),
	},
	query: {},

})
