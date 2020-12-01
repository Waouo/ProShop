import express from 'express'
import products from './data/products.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import colors from 'colors'
import productRouter from './router/productRouter.js'

const app = express()

dotenv.config()

connectDB()

app.use('/api/products', productRouter)

app.get('/', (req, res) => res.send('API is running'))


const port = process.env.PORT || 5000

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on ${port} port!`))