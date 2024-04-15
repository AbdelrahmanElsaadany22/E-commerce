import { Router } from 'express'
import { signin, signup, validateEmail } from './auth.controller.js'
import { assertUniqueEmail } from './auth.middleware.js'
import {
	signinSchema,
	signupSchema,
	validateEmailSchema,
} from './auth.validate.js'
import { validate } from '../../middlewares/validation.js'


const authrouter = Router()

authrouter.post('/signin', validate(signinSchema), signin)
authrouter.post('/signup', validate(signupSchema), assertUniqueEmail, signup)
authrouter.get('/validate/:token', validate(validateEmailSchema), validateEmail)

export default authrouter
