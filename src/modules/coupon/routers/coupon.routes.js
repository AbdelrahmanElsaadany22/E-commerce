import { Router } from 'express'
import { authenticate, authorize } from '../../auth/auth.middleware.js'
import { ROLES } from '../../../utils/enums.js'
import { addCoupon, deleteCoupon, getAllCoupons, getCoupon, updateCoupon } from '../controller/coupon.controller.js'
import { validate } from '../../../middlewares/validation.js'
import { addCouponSchema, deleteCouponSchema, getCouponSchema, updateCouponSchema } from '../validations/coupon.validations.js'


const couponRouter=Router()


couponRouter.route('/').
get(authenticate,authorize(ROLES.ADMIN),getAllCoupons).
post(authenticate,authorize(ROLES.ADMIN),validate(addCouponSchema),addCoupon)



couponRouter.route('/:coupobId').
get(authenticate,authorize(ROLES.ADMIN),validate(getCouponSchema),getCoupon).
put(authenticate,authorize(ROLES.ADMIN),validate(updateCouponSchema),updateCoupon)
.delete(authenticate,authorize(ROLES.ADMIN),validate(deleteCouponSchema),deleteCoupon)


export default couponRouter

