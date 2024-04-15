import { Router } from "express";
import { addProductWithImages, deleteProduct, getAllProduct, getProduct, updateProductWithImages } from "../controller/product.controller.js";
import { upload } from "../../../middlewares/upload.middleware.js";
import { validate } from "../../../middlewares/validation.js";
import { addProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "../validation/product.validation.js";
import { attachCoverImage } from "../middlewares/product.middlewares.js";
import ReviewRouter from "./review.routes.js";

const productRouter=Router({ mergeParams: true })


productRouter.route('/')
.get(getAllProduct)
.post(upload.fields([{ name: 'cover_image', maxCount: 1 },
{ name: 'images', maxCount: 8 },]),validate(addProductSchema),
attachCoverImage(),addProductWithImages)



productRouter.route('/:productSlug')
.get(validate(getProductSchema),getProduct)
.put(upload.fields([{ name: 'cover_image', maxCount: 1 },
{ name: 'images', maxCount: 8 },]),validate(updateProductSchema),
attachCoverImage(),updateProductWithImages)
.delete(validate(deleteProductSchema),deleteProduct)



productRouter.use('/:productSlug/reviews',ReviewRouter)


export default productRouter