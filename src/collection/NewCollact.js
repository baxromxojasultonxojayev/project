import React from 'react';
import { Card, Row, Col, Container, CardBody, CardFooter } from 'reactstrap';
import sneaker1 from '../images/img4.png'
import sneaker2 from '../images/img3.png'
import sneaker3 from '../images/img2.png'
import sneaker4 from '../images/img1.png'
import sneaker5 from '../images/img5.png'
import Ads from '../ads/Ads'

import './collection.css'

const NewCollact = () => {
  return (
    <div className='newcollect'>
      <Container>
        <Row>
          <Col className='card-headers mt-4' md='12'>
            <p>SRAIGHT FROM NIKE</p>
            <h4 className="fw-bold">NEW COLLECTION</h4>
          </Col>
          <Col className='cardsArea' lg='6' md='12'>  
            <Row>
              <Col className='cards' lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneaker1} alt='photo' />
                  </CardBody>
                  <CardFooter>
                    <p>Nike Air Force 1</p>
                    <span>$99</span>
                  </CardFooter>
                </Card>
              </Col>  
              <Col className='cards' lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneaker2} alt='photo' />
                  </CardBody>
                  <CardFooter>
                    <p>Nike Air Force 1</p>
                    <span>$99</span>
                  </CardFooter>
                </Card>
              </Col>
              <Col className='cards' lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneaker3} alt='photo' />
                  </CardBody>
                  <CardFooter>
                    <p>Nike Air Force 1</p>
                    <span>$99</span>
                  </CardFooter>
                </Card>
              </Col>
              <Col className='cards' lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneaker4} alt='photo' />
                  </CardBody>
                  <CardFooter>
                    <p>Nike Air Force 1</p>
                    <span>$99</span>
                  </CardFooter>
                </Card>
              </Col>
            </Row>  
          </Col>
          <Col lg='6' md='12'> 
            <Card>
              <CardBody>
                <div className='productPrice'>
                  <span>SALE -50%</span>
                  <span>$99</span>
                </div>
                <img src={sneaker5} alt='photo' />
              </CardBody>
              <CardFooter className="brand-footer">
                <div className='text'>
                  <h4 className="productName">Nike Air Force 1 Shadow</h4>
                  <p className='productBrand'>Brand: Nike</p>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md='12' className='buttonArea'>
            <a href="#" className='exploreBtn'>Explore Other Products</a>
          </Col>
        
        </Row>
      </Container>
      <Ads />
    </div>
  );
};

export default NewCollact;