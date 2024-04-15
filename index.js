import "dotenv/config"
import connectToDb from './db/connection.js'
import bootstrap from './src/bootstrab.js'
import express  from "express"
import {v2 as cloudinary}from 'cloudinary'


cloudinary.config({
    cloud_name: 'dghw5xgjh',
    api_key: '312575985147657',
    api_secret:'HWp0TZfRHT_3iUWeYQt7lfZs4wc'
  });

const app = express()
const port=+process.env.PORT
app.use(express.static('uploads'))
connectToDb()
bootstrap(app)


//abdelrahman
app.listen(port, () => console.log(`Example app listening on port ${port}!`))