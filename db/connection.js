import mongoose from 'mongoose'
const connectToDb = () => {
	mongoose
		.connect(process.env.DB_STRING)
		.then(() => console.log('Connected to DB successfully in ',process.env.DB_STRING))
		.catch(() => console.log('Error connecting to DB!'))
}

export default connectToDb