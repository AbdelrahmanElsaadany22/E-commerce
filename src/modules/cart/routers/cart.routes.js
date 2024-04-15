import { Router } from 'express'
import { addToCart,
	getCart,
	removeFromCart,
	applyCoupon, } from '../controller/cart.controller.js'
import { ROLES } from '../../../utils/enums.js'
import { authenticate, authorize } from '../../auth/auth.middleware.js'
import { assertCart } from '../middlewares/cart.middleware.js'

const Cartrouter = Router()

Cartrouter.route('/').get(authenticate, authorize(ROLES.USER), assertCart, getCart)
Cartrouter
	.route('/add')
	.post(authenticate, authorize(ROLES.USER), assertCart, addToCart)
	Cartrouter
	.route('/remove')
	.delete(authenticate, authorize(ROLES.USER), assertCart, removeFromCart)
	Cartrouter
	.route('/coupon')
	.post(authenticate, authorize(ROLES.USER), assertCart, applyCoupon)

export default Cartrouter
