import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import category from './Routers/categoryRoute'

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/job-finder');

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/category", category)


app.listen(process.env.PORT, () => {
    console.log("app listening on port " + process.env.PORT)
})