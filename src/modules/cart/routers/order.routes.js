import { Router } from "express";
import { authenticate, authorize } from "../../auth/auth.middleware.js";
import { ROLES } from "../../../utils/enums.js";
import { getUserOrders, makeCODorder, makePaymentSession } from "../controller/order.controller.js";
import { validate } from "../../../middlewares/validation.js";
import { addOrderSchema } from "../validations/order.validations.js";
import { assertCart } from "../middlewares/cart.middleware.js";
const OrderRouter=Router()

OrderRouter.route('/').get(authenticate,authorize(ROLES.USER),getUserOrders)

OrderRouter.route('/cash').post(
    authenticate,
    authorize(ROLES.USER),
    validate(addOrderSchema),
    assertCart,
    makeCODorder)

OrderRouter.route('/card').post(authenticate,authorize(ROLES.USER),assertCart,makePaymentSession)
export default OrderRouter