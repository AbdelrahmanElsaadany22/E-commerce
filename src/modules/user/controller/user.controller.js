import express from "express";
import { catchAsyncError } from "../../../utils/error.handler.js";
import userModel from "../models/user.model.js";




export const getAllUser=catchAsyncError(async (req,res)=>{
	const apiFeatures = new ApiFeatures(userModel.find(), req.query).paginate(
		10
	)
	const users = await apiFeatures.query
	res.json({ users })
})


export const getUser = catchAsyncError(async (req, res) => {
	const user = await userModel.findById(req.user.id)
	res.json({ user })
})


export const updateUser = catchAsyncError(async (req, res) => {
	const user = await userModel.findByIdAndUpdate(req.user.id, req.body, {
		new: true,
	})
	res.json({ user })
})
