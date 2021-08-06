import React from 'react'
import Navbar from './homePage/Navbar';
import CategoriesSection from './homePage/styles/CategoriesSection';
import Home from './homePage/styles/Home';
import './homePage/styles/main.css'
import './homePage/styles/responsive.css'
import SmartWatch from './recommendation/SmartWatch';
import Ads from './ads/Ads';
import NewCollact from './collection/NewCollact';
import Trending from './trending/Trending';
import Footer from './footer/Footer';
function App() {
  return (
    <div className="App">
       <Navbar />
       <CategoriesSection />
       <Home />
       <SmartWatch />
       <Ads />
       <NewCollact />
       <Trending />
       <Footer />
    </div>
  );
}

export default App;
