import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './router/productRoutes.js'
import userRoutes from './router/userRoutes.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('API is running'))

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on ${port} port!`))