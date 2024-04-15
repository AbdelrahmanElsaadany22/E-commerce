import { Router } from "express";

import { ROLES } from "../../../utils/enums.js";
import { getAllUser, getUser, updateUser } from "../controller/user.controller.js";
import { getWishlist, updateWishlist } from "../controller/wishlist.controller.js";
import { updateWishlistSchema } from "../validation/wishlist.validations.js";
import { authenticate, authorize } from "../../auth/auth.middleware.js";
import { validate } from "../../../middlewares/validation.js";



const userRouter=Router()

userRouter.route('/').
get(authenticate,authorize(ROLES.USER),getUser).
put(authenticate, authorize(ROLES.USER), updateUser)

userRouter.route('/all').get(authenticate, authorize(ROLES.ADMIN), getAllUser)



userRouter.route('/wishlist').
get(authenticate, authorize(ROLES.USER), getWishlist).
put(
    authenticate,
    authorize(ROLES.USER),
    validate(updateWishlistSchema),
    updateWishlist
)
export default userRouter