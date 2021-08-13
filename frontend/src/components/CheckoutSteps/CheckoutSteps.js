import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './CheckoutSteps.css'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
      <Nav className="justify-content-center mb-4 nav-cross-line">
        <Nav.Item>
          {step1 ? (
            <LinkContainer to="/login">
              <Nav.Link className="step-item-enabled">登入</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link className="step-item-disabled">登入</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step2 ? (
            <LinkContainer to="/shipping">
              <Nav.Link className="step-item-enabled">運輸</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link className="step-item-disabled">運輸</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step3 ? (
            <LinkContainer to="/payment">
              <Nav.Link className="step-item-enabled">付款</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link className="step-item-disabled">付款</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step4 ? (
            <LinkContainer to="/placeorder">
              <Nav.Link className="step-item-enabled">結帳</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link className="step-item-disabled">結帳</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
  )
}

export default CheckoutSteps
