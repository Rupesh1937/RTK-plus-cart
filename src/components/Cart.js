import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap';
import { remove } from '../store/cartSlice';


function Cart() {
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const removeFromCart = (id) => {
        dispatch(remove(id))
    }
    const cards = products.map((product) => (
        <div className="col-md-3">
          <Card key={product.id} className='h-100' style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
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
            <Button variant="danger" onClick={() => removeFromCart(product.id)} >Remove</Button>
            </Card.Footer>
          </Card>
        </div>
      ));

  return (
    <div className='row'>
        <h1>Cart</h1>
        <div style={{height: '20px'}}></div>
      {cards}
    </div>
  )
}

export default Cart
