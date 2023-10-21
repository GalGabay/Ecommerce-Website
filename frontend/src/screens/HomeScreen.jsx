import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import { useParams, Link } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice.js';
import Loader  from '../components/Loader';
import Message  from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data , isLoading, error } = useGetProductsQuery({ keyword, pageNumber });

  return (

    <>
      <Meta title="Gal's Shop" />

      { !keyword ? (
        <ProductCarousel />) :  (<Link to='/' className='btn btn-light mb-4'>Go Back</Link>)}

      {/*if it is loading then do something, else there is an error do that and otherwise show the page */}
    { isLoading ? (
      <Loader /> ) 
      : error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) 
      : (<>
      <h1>Products</h1>
    <Row>
        {data.products.map((product) => (
            //explenation: sm - small screen, md=medium screen and so on
            // We are creating a column to each product
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
    </Row>

    <Paginate 
       pages={data.pages} 
       page={data.page} 
       keyword = {keyword ? keyword : ''} />
    </>) }

    
    </>
  )
}

export default HomeScreen