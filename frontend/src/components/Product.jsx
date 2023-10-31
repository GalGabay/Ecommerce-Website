import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

  return (
    <Card className="my-3 p-3 rounded">

    {/* the link is like a - that is a link to the product(by its id) and the card img is the image of the specific card(product).*/}
    <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
    </Link>

    <Card.Body> {/* this is the body of the card*/}
    {/* the link is like a - that is a link to the product(by its id) and the card img is the image of the specific card(product).*/}
        <Link to={`/product/${product._id}`}>
            <Card.Title as="div" className='product-title'>
                <strong>{product.name}</strong>
            </Card.Title>
        </Link>
        {/*<Card.Text as="div">
            <Rating value={ product.rating } text={`${product.numReviews} reviews`  }/>
        </Card.Text> */}
        <Card.Text as="h3"> {/* this is the text showing the price*/}
            ${product.price}
        </Card.Text>
    </Card.Body>
    </Card>
  )
}

export default Product