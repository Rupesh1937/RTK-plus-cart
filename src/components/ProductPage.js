import React from 'react'
import { useParams } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import { Link } from 'react-router-dom'
import { productsList } from '../constants/productList';
import { remove } from '../store/cartSlice';

function ProductPage({ products }) {
    const { productId } = useParams();
    const product = productsList.find(p => p.id === parseInt(productId));
    console.log(product);
    

    const dispatch = useDispatch()
    const addToCart = (product) => {
        // dispatch an add action
        dispatch(add(product))
    }
    const removeFromCart = (id) => {
        dispatch(remove(id))
    }

    if(!product){
        return <h2>Product Not Found</h2>
    }
  return (
    <Card key={product.id} className='h-100' style={{ width: "18rem" }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Link to={`/products/${product.id}`}>
      <Card.Title>{product.name}</Card.Title>
      </Link>
      <b>
      <Card.Text>
        {product.shortDescription}
      </Card.Text>
      </b>
      <Card.Text>
        {product.detailedDescription}
      </Card.Text>
      <i>
      <Card.Text>
       $ {product.price} 
      </Card.Text>
      </i>
      
      
    </Card.Body>
    <Card.Footer style={{background: 'white'}}>
    <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
    <br />
    <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove from Cart</Button>
    </Card.Footer>
  </Card>
  )
}

export default ProductPage
