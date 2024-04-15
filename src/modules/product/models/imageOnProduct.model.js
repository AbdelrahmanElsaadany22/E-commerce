//population 
import mongoose from "mongoose";

/*
بنستخدمها لما بنعوز نجيب القيمه الحقيقه لل id من تابيل تانيخ
بمعني مثلا عندك تابيل فيها ال id 
وتابيل تانيه فيها المرتبات والاتنين مربوطين ببعض
وظيفه للفانكشن بقي انها تروح تجيب قيمه المرتب الحقيقه للموظف اللي ال id  fjhui ;`i
*/
const imageOnProductSchema=new mongoose.Schema({
    image_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'image'
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'product'
    }
})
imageOnProductSchema.pre(/find/,function(next){
    this.populate('image_id')
    next()
})
imageOnProductSchema.pre(/delete/i, async function (next) {
	const toBeDeletedIOP = await imageOnProductModel.findOne(this._conditions)
	if (!toBeDeletedIOP) return next()
	await mongoose.model('image').findByIdAndDelete(toBeDeletedIOP.image_id._id)
})

const imageOnProductModel = mongoose.model(
	'imageOnProduct',
	imageOnProductSchema
)

export default imageOnProductModel


