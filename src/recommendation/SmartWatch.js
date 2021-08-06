import React from 'react';
import SmartWatches from '../JSON/SmartWatch.json'
import './recommend.css'
import './responsive.css'


const SmartWatch = () => {
  return (
    <div className='smartwatch'>
      <div className="title">
        <p>Explore Awesome Products</p>
        <h3>Recommended For You</h3>
      </div>
      <div className="cards">
        {SmartWatches.map(post => {
          return(
            <div className="productCard">
              <img src={post.img} />
              <p>{post.name}</p>
              <div className="price">
                {post.price}
              </div>
            </div>
          )
        })}
      </div>
      <span className="buttonArea">
        < a href='#' className="exploreBtn">Explore Other Products</a>
      </span>
    </div>
  );
};


export default SmartWatch;