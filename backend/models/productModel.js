import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
},
  { timestamps: true }
)


const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: 'User',
  },
  image: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  reviews: [
    reviewSchema
  ],
  rating: {
    type: String,
    require: true,
    default: 0,
  },
  numReviews: {
    type: String,
    require: true,
    default: 0,
  },
  price: {
    type: String,
    require: true,
    default: 0,
  },
  countInStock: {
    type: String,
    require: true,
    default: 0,
  },
},
  { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

export default Product