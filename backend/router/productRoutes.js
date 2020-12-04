import express from 'express'
import { getProducts, getProductById } from '../controllers/productController.js'
const router = express.Router()

// @desc     Fetch products data
// @route    Get /api/products
// @access   Public
router.route('/').get(getProducts)

// @desc     Fetch single product data
// @route    Get /api/products/:id
// @access   Public
router.route('/:id').get(getProductById)

export default router