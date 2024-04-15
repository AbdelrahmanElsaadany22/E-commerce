import { upload } from "../../../middlewares/upload.middleware.js";
import { validate } from "../../../middlewares/validation.js";
import { attachImage } from "../../image/middlewares/image.middleware.js";
import { addBrand, deleteBrand, getBrand, getBrands, updateBrand } from "../controller/brand.controller.js";
import { Router } from "express";
import { addBrandSchema, deleteBrandSchema, getAllBrandsSchema, getBrandSchema, updateBrandSchema } from 
"../validation/brand.validation.js";

const brandrouter=Router()

brandrouter.route('/').
get(validate(getAllBrandsSchema),getBrands)
.post(upload.single('logo'),validate(addBrandSchema),attachImage('logo'),addBrand)


brandrouter.route('/:brandSlug').
get(validate(getBrandSchema),getBrand).
put(upload.single('logo'),validate(updateBrandSchema),attachImage('logo'),updateBrand)
.delete(validate(deleteBrandSchema),deleteBrand)



export default brandrouter