import {Router} from "express";
import { validate } from "../../../middlewares/validation.js";
import { addSubcategorySchema, 
    deleteSubcategorySchema,
     getSubcategoriesSchema, 
     getSubcategorySchema, 
     updateSubcategorySchema } from "../validation/subcategory.validations.js";
import { addSubcategory,
    deleteSubcategory,
    getSubCategory,
    getSubcategories,
    updateSubcategory } from "../controller/subcategory.controller.js";

const subCategoryRouter = Router({ mergeParams: true })
subCategoryRouter.route('/')
.get(validate(getSubcategoriesSchema),getSubcategories)
.post(validate(addSubcategorySchema),addSubcategory)


subCategoryRouter.route('/:subcategorySlug')
.get(validate(getSubcategorySchema),getSubCategory)
.put(validate(updateSubcategorySchema),updateSubcategory)
.delete(validate(deleteSubcategorySchema),deleteSubcategory)

export default subCategoryRouter