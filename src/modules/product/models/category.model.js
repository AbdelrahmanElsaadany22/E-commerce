import mongoose from 'mongoose'
import slugify from 'slugify'

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			minLength: 3,
			maxLength: 200,
			required: true,
			trim: true,
			unique: true,
		},
		slug: {
			type: String,
			minLength: 3,
			maxLength: 200,
			trim: true,
			unique: true,
		},
		image: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'image',
			required: true,
		},
	},
	{ timestamps: true }
)

categorySchema.pre('save', function (next) {
	this.slug = slugify(this.name, { lower: true })
	next()
})

categorySchema.pre(/update/i, function (next) {
	if (this._update.name)
		this._update.slug = slugify(this._update.name, { lower: true })
	next()
})

categorySchema.pre(/find/, function (next) {
	this.populate('image', ['path'])
	next()
})

categorySchema.pre(/delete/i, async function (next) {
	const toBeDeletedCategory = await categoryModel.findOne(this._conditions)
	if (!toBeDeletedCategory) return next()
	await mongoose.model('image').findByIdAndDelete(toBeDeletedCategory.image)
	next()
})

categorySchema.pre(/update/i, async function (next) {
	if (!this._update.image) return next()
	const toBeUpdatedCategory = await categoryModel.findOne(this._conditions)
	if (!toBeUpdatedCategory) return next()
	await mongoose.model('image').findByIdAndDelete(toBeUpdatedCategory.image)
	next()
})

const categoryModel = mongoose.model('category', categorySchema)

export default categoryModel
