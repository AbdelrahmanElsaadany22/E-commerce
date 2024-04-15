
import { catchAsyncError } from "../../../utils/error.handler.js";
import categoryModel from "../models/category.model.js";
import subcategoryModel from "../models/subcategory.model.js";

export const getSubCategory=catchAsyncError(async(req,res)=>{
const {categorySlug,subcategorySlug}=req.params
const category=await categoryModel.findOne({slug:categorySlug})


if(!category)
{
    res.status(404).json({message:"there is not a category by this name"})
}

const subCategory=await subcategoryModel.findOne({
    slug:subcategorySlug,
    category_id:category._id
})
if(!subCategory)
{
    res.status(404).json({message:"there is not a Subctegory by this name"})
}
res.json({ subCategory })
})

export const getSubcategories=catchAsyncError(async(req,res)=>{
    const {categorySlug}=req.params
    const categories=await categoryModel.findOne({slug:categorySlug})
    if(!categories)
    {
    res.status(404).json({message:"Category not found"})
    }
    const subcategories = await subcategoryModel.find({category_id: category._id})
	res.json({ subcategories })
})

export const addSubcategory=catchAsyncError(async(req,res)=>{
	const { categorySlug } = req.params
	const category = await categoryModel.findOne({ slug: categorySlug })
	if (!category) res.status(404).json({ message: 'Category not found' })
	const subcategory = await subcategoryModel.create({
		...req.body,
		category_id: category._id,
	})
	res.status(201).json({ subcategory })
})


export const updateSubcategory = catchAsyncError(async (req, res) => {
	const { categorySlug } = req.params
	const category = await categoryModel.findOne({ slug: categorySlug })
	if (!category) res.status(404).json({ message: 'Category not found' })
	const { subcategorySlug } = req.params
	const subcategory = await subcategoryModel.findOneAndUpdate(
		{ slug: subcategorySlug, category_id: category._id },
		req.body
	)
	res.status(201).json({message:"subcategory updated successfully"})
})

export const deleteSubcategory = catchAsyncError(async (req, res) => {
	const { categorySlug } = req.params
	const category = await categoryModel.findOne({ slug: categorySlug })
	if (!category) res.status(404).json({ message: 'Category not found' })
	const { subcategorySlug } = req.params
	const subcategory = await subcategoryModel.findOneAndDelete({
		slug: subcategorySlug,
		category_id: category._id,
	})
	res.json({ subcategory })
})
