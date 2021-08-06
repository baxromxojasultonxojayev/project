import React from 'react';
import Logo from '../images/logo.png'
import { Container, Row, Col } from 'reactstrap';
import './footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col md='6'>
            <div className='brand'>
              <a href='#'>
                <img src={Logo} />
              </a>
              <p className='brandText'>
                The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still 
                need the element to resemble a link, use a button and change it with appropriate styles.
              </p>
            </div>
          </Col>
          <Col md='4'>
            <ul className='products'>
              <li>
                <h4>PRODUCTS</h4>
              </li>
              <li>
                <a href='#'>
                  Trending
                </a>
              </li>
              <li>
                <a href='#'>
                  My Account
                </a>
              </li>
              <li>
                <a href='#'>
                  Vendors
                </a>
              </li>
              <li>
                <a href='#'>
                  Brands
                </a>
              </li>
              <li>
                <a href='#'>
                  Store
                </a>
              </li>
                
            </ul>
            <ul className='products'>
              <li>
                <h4>LEGALS</h4>
              </li>
              <li>
                <a href='#'>
                  License
                </a>
              </li>
              <li>
                <a href='#'>
                  Refund Policy
                </a>
              </li>
              <li>
                <a href='#'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#'>
                  Brands
                </a>
              </li>
                
            </ul>
            <ul className='products'>
              <li>
                <h4>Contacts</h4>
              </li>
              <li>
                <p className='textLi'>Fell free get in touch with us vie phone or send us a message</p>
              </li>
              <li>
                <a href='tel: +998973307424'>
                  Tel: +1 234 567 89 10
                </a>
              </li>
              <li>
                <a href='mailto:support@khomi.com'>
                  support@khomi.com
                </a>
              </li>
            </ul>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Footer;