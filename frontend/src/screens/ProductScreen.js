import React from 'react'
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';





const ProductScreen = ({match}) => {

  const product = products.find(product => product._id === match.params.id)
  return (
    <>
     <Link className='btn btn-dark my-3' to='/' >Go Back </Link>

     <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} />
      </Col>

      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
              <h3>{product.name}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          </ListGroup.Item>

          <ListGroup.Item>
           Price:  ${product.price}
          </ListGroup.Item>

          <ListGroup.Item>
            <p>{product.description}</p>
          </ListGroup.Item>

        </ListGroup>

      </Col>

      <Col>
        <Card>
         <ListGroup  variant='flush'>
          <ListGroup.Item>
          <Row>
            <Col>
            Price:
            </Col>
            <Col> <strong>{product.price}</strong></Col>
          </Row>
          </ListGroup.Item>

          <ListGroup.Item>
          <Row>
            <Col>
            Status:
            </Col>
            <Col>
             {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
            </Col>
          </Row>
          </ListGroup.Item>

          <ListGroup.Item>
              <Button 
                className='btn-block' 
                type='button' 
                disabled={product.countInStock ===  0 }>Add To Cart
              </Button>
          </ListGroup.Item>

         </ListGroup>
        </Card>
      </Col>

      
     </Row>
    </>
  )
}

export default ProductScreen;
