import { Router } from "express";
import { addCategory, deleteCategory, getAllcategories, getcategoryBySlug, updateCategoty } from "../controller/category.controller.js";
import { upload } from "../../../middlewares/upload.middleware.js";
import { validate } from "../../../middlewares/validation.js";
import { addCategorySchema, deleteCategorySchema, getCategorySchema, updateCategorySchema } from "../validation/category.validation.js";
import { attachImage } from "../../image/middlewares/image.middleware.js";
import subCategoryRouter from "./subcategory.routes.js";
const categoryRouter=Router()


categoryRouter.route('/').get(getAllcategories)
.post(upload.single('image'),validate(addCategorySchema),attachImage('image'),addCategory)


categoryRouter.route('/:categorySlug').get(validate(getCategorySchema),getcategoryBySlug)
.put(upload.single('image'),validate(updateCategorySchema),attachImage('image'),updateCategoty)
.delete(validate(deleteCategorySchema),deleteCategory)

categoryRouter.use('/:categorySlug/subcategories', subCategoryRouter)
export default categoryRouter