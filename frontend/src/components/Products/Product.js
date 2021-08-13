import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating'
import './Product.css'

const Product = ({ product }) => {
  return (
    <Card className="card-product my-3 p-3 rounded shadow">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
        <Card.Body>
          <Card.Title as="div">{product.name}</Card.Title>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} 個評價`}
            ></Rating>
          </Card.Text>
          <Card.Text as="h3" className="text-danger">
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default Product
