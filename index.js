import "dotenv/config"
import connectToDb from './db/connection.js'
import bootstrap from './src/bootstrab.js'
import express  from "express"
import {v2 as cloudinary}from 'cloudinary'


cloudinary.config({
    cloud_name:CLOUDINARY_CLOUD_NAME,
    api_key:CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_API_SECRET
  });

const app = express()
const port=+process.env.PORT
app.use(express.static('uploads'))
connectToDb()
bootstrap(app)


//abdelrahman
app.listen(port, () => console.log(`Example app listening on port ${port}!`))