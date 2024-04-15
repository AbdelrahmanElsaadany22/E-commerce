import { Router } from "express";
import authrouter from "../modules/auth/auth.routes.js";
import productRouter from "../modules/product/routers/product.routes.js";
import brandrouter from "../modules/product/routers/brand.routes.js";
import categoryRouter from "../modules/product/routers/category.routes.js";
import userRouter from "../modules/user/routers/user.routes.js";
import couponRouter from "../modules/coupon/routers/coupon.routes.js";
import OrderRouter from "../modules/cart/routers/order.routes.js";
import Cartrouter from "../modules/cart/routers/cart.routes.js";
const router=Router()
router.use('/auth', authrouter)
router.use('/product',productRouter)
router.use('/brand',brandrouter)
router.use('/category',categoryRouter)
router.use('/user',userRouter)
router.use('/coupon',couponRouter)
router.use('/order',OrderRouter)
router.use('/cart',Cartrouter)
export default router