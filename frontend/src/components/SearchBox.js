import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="搜尋商品..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-success"
        className="pt-2 pb-1 p-x4"
      >
        <i className="fas fa-search" style={{ fontSize: '18px' }}></i>
      </Button>
    </Form>
  )
}

export default withRouter(SearchBox)
