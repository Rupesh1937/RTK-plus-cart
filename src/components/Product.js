import React from 'react'
import { productsList } from '../constants/productList'
import { Card, Nav } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import { Link } from 'react-router-dom'





const products = productsList
function Product() {

    const dispatch = useDispatch()
    const addToCart = (product) => {
        // dispatch an add action
        dispatch(add(product))
    }

    const cards = products.map((product) => (
      <div className="col-md-3">
        <Card key={product.id} className='h-100' style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Link to={`/products/${product.id}`}>
            <Card.Title>{product.name}</Card.Title>
            </Link>
            <Card.Text>
              {product.shortDescription}
            </Card.Text>
            <i>
            <Card.Text>
             $ {product.price} 
            </Card.Text>
            </i>
            
            
          </Card.Body>
          <Card.Footer style={{background: 'white'}}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    ));

  return (
    <>
      <h1>Product List</h1>
      <br />
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Product
