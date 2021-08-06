import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import iphone from '../../images/iphones.png'

const Home = () => {
  return (
    <div className="home">
      <div className='main'>
        <div className='side-one'>
          <h3>
            GET THE NEW IPHONE 12 PRO
          </h3>
          <p>
            We’ll work with the carrier you choose to activate your new iPhone so you can keep your number. 
            For 5G service, some carriers may require an upgrade to a 5G plan.
          </p>
          <div className="buttons">
            <a href="#" className="button1">
              Buy Now 
              <ShoppingBasketIcon />
            </a>
            <a href="#" className="button2">
              With $599 with trade-in
            </a>
          </div>
        </div>
        <div className="side-two">
          <img src={iphone} alt='iphone.img' />
        </div>
      </div>
      
    </div>
  );
};


export default Home;