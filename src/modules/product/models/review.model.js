import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			minLength: 3,
			maxLength: 10000,
			required: true,
			trim: true,
		},
		rating: {
			type: Number,
			required: true,
			enum: [1, 2, 3, 4, 5],
		},
		product_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'product',
		},
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'user',
		},
	},
	{ timestamps: true }
)

reviewSchema.pre(/find/, function (next) {
	this.populate('user_id', ['-password', 'name', 'email'])
	next()
})

const reviewModel = mongoose.model('review', reviewSchema)

export default reviewModel
