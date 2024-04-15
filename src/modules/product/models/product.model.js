import mongoose from 'mongoose'
import slugify from 'slugify'

const productSchema = new mongoose.Schema(
	{
		title: {
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
		description: {
			type: String,
			minLength: 3,
			maxLength: 10000,
			required: true,
			trim: true,
		},
		stock: {
			type: Number,
			min: 0,
			required: true,
		},
		price: {
			type: Number,
			min: 0.01,
			required: true,
		},
		discounted_price: {
			type: Number,
			min: 0.01,
			required: true,
			validate: {
				validator: function (value) {
					return value <= this.price
				},
				message:
					'The discounted price must not exceed the initial price',
			},
		},
		cover_image: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'image',
		},
		features: [
			{
				key: String,
				value: String,
			},
		],
		subcategory_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'subcategory',
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
)

productSchema.pre('save', function (next) {
	this.slug = slugify(this.title, { lower: true })
	next()
})

productSchema.pre(/update/i, function (next) {
	if (this._update.title)
		this._update.slug = slugify(this._update.title, { lower: true })
	next()
})

productSchema.pre(/find/, function (next) {
	this.populate('cover_image')
	next()
})

productSchema.pre(/delete/i, async function (next) {
	const toBeDeletedProduct = await productModel.findOne(this._conditions)
	if (!toBeDeletedProduct) return next()
	await mongoose
		.model('image')
		.findByIdAndDelete(toBeDeletedProduct.cover_image)

	await Promise.all(
		toBeDeletedProduct.images.map(async (image) => {
			await mongoose.model('imageOnProduct').findByIdAndDelete(image._id)
		})
	)
	next()
})

productSchema.pre(/update/i, async function (next) {
	if (!this._update.cover_image) return next()
	const toBeUpdatedProduct = await productModel.findOne(this._conditions)
	if (!toBeUpdatedProduct) return next()

	await mongoose
		.model('image')
		.findByIdAndDelete(toBeUpdatedProduct.cover_image)
	next()
})
//افتكر السلم اللي جوه بعضه
productSchema.virtual('images', {
	ref: 'imageOnProduct',
	localField: '_id',
	foreignField: 'product_id',
})

productSchema.pre(/^find/, function (next) {
	this.populate('images', ['-product_id', 'image_id'])
	this.populate('subcategory_id', ['name'])
	next()
})

const productModel = mongoose.model('product', productSchema)

export default productModel
