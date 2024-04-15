import { catchAsyncError } from "../../../utils/error.handler.js";
import brandModel from "../models/brand.model.js";

export const getBrand=catchAsyncError(async (req,res)=>{
    const {brandslug}=req.query
    const TheBrand=await brandModel.findOne({slug:brandslug})
    res.json({TheBrand})
})



export const getBrands=catchAsyncError(async (req,res)=>{
const brands=await brandModel.find()
res.json(brands)
})


export const addBrand=catchAsyncError(async (req,res)=>{
    const brand =await brandModel.create(req.body)
    res.status(201).json({brand})
})


export const updateBrand=catchAsyncError(async(req,res)=>{
    const {brandSlug}=req.params
    const Thebrand=brandModel.findOneAndUpdate({slug:brandSlug},req.body,{new:true})
    res.status(201).json(Thebrand)
})


export const deleteBrand=catchAsyncError(async (req,res)=>{
    const {brandSlug}=req.params
    const deletedBrand=brandModel.findOneAndDelete({slug:brandSlug})
    res.status(201).json({message:"brand deleted successfully"})
})