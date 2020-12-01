import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)

      setProduct(data)
    }

    fetchProduct()
  }, [match])

  return (
    <>
      <Link className="btn btn-light my-3">Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>
              Description:
              <br />
              {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroupItem>
              <Row>
                <Col>
                  Price
            </Col>
                <Col>
                  ${product.price}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  status:
            </Col>
                <Col>
                  {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className='btn-block' disabled={product.countInStock === 0}>
                Add To Cart
            </Button>
            </ListGroupItem>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
