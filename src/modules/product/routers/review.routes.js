import { Router } from "express";
import { validate } from "../../../middlewares/validation.js";
import { addReviewSchema, deleteReviewSchema, getReviewSchema, updateReviewSchema } from "../validation/review.validations.js";
import { addReview, deleteReview, getReviews, updateReview } from "../controller/review.controller.js";
import { authenticate, authorize } from "../../auth/auth.middleware.js";
import { ROLES } from "../../../utils/enums.js";


const ReviewRouter=Router({mergeParams: true})

ReviewRouter.route('/')
.post(authenticate,authorize(ROLES.USER),validate(addReviewSchema),addReview)
.get(validate(getReviewSchema),getReviews)
.put(authenticate,authorize(ROLES.USER),validate(updateReviewSchema),updateReview)
.delete(authenticate,authorize(ROLES.USER),validate(deleteReviewSchema),deleteReview)

export default ReviewRouter 