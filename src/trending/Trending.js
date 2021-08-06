import React from 'react';
import Trend from '../JSON/trending.json'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Ads from '../ads/Ads'
import './trend.css'

const Trending = () => {
  return (
    <div className="trending">
      <div className='pageTitles'>
        <p>Top Products</p>
        <h4>Trending This Week</h4>
      </div>

      <Container className='trendingCards'>
        <Row>
          <Col className='d-flex flex-wrap'>
            {Trend.map(post => {
              return(
                <Col md='3'>
                  <Card>
                    <CardHeader>
                      <img src={post.img} alt='Product image' />
                    </CardHeader>
                    <CardBody>
                      <div className='infoTitle'>
                        <p>{post.name}</p>
                        <span >{post.price}</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
          </Col>
        </Row>
      </Container>
      <Ads />
    </div>
  );
};


export default Trending;