import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image} from 'react-bootstrap';
import { useGetTopProductsQuery } from '../slices/productsApiSlice.js';

const ProductCarousel = () => {
    const {data: products, isLoading, error} = useGetTopProductsQuery();


  return ( 
        <>  
        <h1 className='carousel-text'>Hot Products</h1>   
        <Carousel pause='hover' className='bg-primary mb-4'>
            {products && products.map((product) => (
                <Carousel.Item key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <Image src={product.image} alt={product.name} fluid />
                        <Carousel.Caption className='carousel-caption'>
                            <h2>{product.name} (${product.price})</h2>
                            <p className='m-2'>{product.description}</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
        </> 
  )
}

export default ProductCarousel