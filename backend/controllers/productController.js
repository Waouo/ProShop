import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch products data
// @route   Get /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// @desc    Fetch single product data
// @route   Get /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Delete single product data
// @route   Delete /api/products/:id
// @access  Private
const deleteProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    product.deleteOne()
    res.json({ message: 'Product deleted' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create single product data
// @route   Post /api/products
// @access  Private
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'sampleProducts',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'sample brand',
    category: 'sample category',
    countInStock: 0,
    newReviews: 0,
    description: 'sample description',
  })

  const createProduct = await product.save()
  res.status(201).json(createProduct)
})

// @desc    Update single product data
// @route   Put /api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    image,
    brand,
    category,
    countInStock,
    description,
  } = req.body

  const product = await Product.findById(req.params.id)
  if (product) {
    product.name = name
    product.price = price
    product.image = image
    product.brand = brand
    product.description = description
    product.category = category
    product.countInStock = countInStock

    const updateProduct = await product.save()
    res.status(201).json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }

  
})

export {
  getProducts,
  getProductById,
  deleteProductById,
  createProduct,
  updateProduct,
}
