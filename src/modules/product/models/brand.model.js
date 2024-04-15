import mongoose from 'mongoose'
import slugify from 'slugify'

const brandSchema = new mongoose.Schema(
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
		logo: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'image',
		},
	},
	{ timestamps: true }
)

brandSchema.pre('save', function (next) {
	this.slug = slugify(this.name, { lower: true })
	next()
})

brandSchema.pre(/update/i, function (next) {
	if (this._update.name)
		this._update.slug = slugify(this._update.name, { lower: true })
	next()
})

brandSchema.pre(/find/, function (next) {
	this.populate('logo', ['path'])
	next()
})

brandSchema.pre(/delete/i, async function (next) {
	const toBeDeleted = await brandModel.findOne(this._conditions)
	if (!toBeDeleted) return next()
	await mongoose.model('image').findByIdAndDelete(toBeDeleted.logo)
	next()
})

brandSchema.pre(/update/i, async function (next) {
	if (!this._update.logo) return next()
	const toBeUpdated = await brandModel.findOne(this._conditions)
	if (!toBeUpdated) return next()
	await mongoose.model('image').findByIdAndDelete(toBeUpdated.logo)
	next()
})

const brandModel = mongoose.model('brand', brandSchema)

export default brandModel
