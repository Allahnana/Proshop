import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
     <h1>Latest Product</h1>
      <Row>
         {products.map(product => (
            <Col>
              <h3>{product.name}</h3>
            </Col>
         ))}
      </Row>
    </>
  )
}

export default HomeScreen