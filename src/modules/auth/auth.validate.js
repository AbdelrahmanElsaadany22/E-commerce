import Joi from 'joi'

export const signinSchema = Joi.object({
	body: {
		email: Joi.string().required(),
		password: Joi.string().required(),
	},
	params: {},
	query: {},
})

export const signupSchema = Joi.object({
	body: {
		email: Joi.string()
			.email({
				minDomainSegments: 2,
				tlds: { allow: ['com', 'net'] },
			})
			.required(),
		password: Joi.string()
			.required(),
		name: Joi.string().required(),
		role:Joi.string()
	},
	params: {},
	query: {},
})

export const validateEmailSchema = Joi.object({
	body: {},
	params: {
		token: Joi.string().hex().length(24)
	},
	query: {},
})
