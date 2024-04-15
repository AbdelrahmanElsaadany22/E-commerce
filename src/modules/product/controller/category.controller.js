import { catchAsyncError } from "../../../utils/error.handler.js";
import categoryModel from "../models/category.model.js";

export const getcategoryBySlug=catchAsyncError(async(req,res)=>{
    const { categorySlug } = req.params
    const thecategory=await categoryModel.findOne({slug:categorySlug})
    if(!thecategory)
    {
        res.status(404).json({message:"there is no category bu this name"})
    }
    res.status(201).json({thecategory})

})

export const getAllcategories=catchAsyncError(async (req,res)=>{    
    const categories=await categoryModel.find()
    res.status(201).json({categories})
})

export const addCategory=catchAsyncError(async(req,res)=>{
    const category=await categoryModel.create(req.body)
    res.status(201).json({message:'the category addedd succefully'})
})
export const updateCategoty=catchAsyncError(async(req,res)=>{
    const {categorySlug}=req.params
    const category=await categoryModel.findOneAndUpdate({slug:categorySlug},req.body)
    if(!category)
    {
        res.status(404).json({message:"there is no category by this name"})
    }
    res.status(201).json({message:"the category updated successfully"})
})
export const deleteCategory = catchAsyncError(async (req, res) => {
	const { categorySlug } = req.params
	const category = await categoryModel.findOneAndDelete({
		slug: categorySlug,
	})
    if(!category)
    {
        res.status(404).json({message:"there is no category by this name"})
    }
	res.json({ category })
})