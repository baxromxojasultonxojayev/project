import React from 'react';
import navLogo from '../images/logo.png'
  import SearchIcon from '@material-ui/icons/Search';
  import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
  import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
  import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ResponsiveModal from './ResponisveModal';

// import './styles/main.css'



const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <a href="#" className="nav-logo">
          <img src={navLogo} alt="logo"/>
        </a>
        <ResponsiveModal />
        <div className='search-section'>
          <form>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search For Products, Brands & Categories" />
            <button className="searchBtn" type="submit" >
              <SearchIcon />
            </button>
          </form>
        </div>
        <ul className="icons">
          <li className="icon">
            <a href="#" className="icon-link">
              <FavoriteBorderIcon />
            </a>
          </li>
          <li className="icon">
            <a href="#" className="icon-link">
              <PersonOutlineIcon />
            </a>
          </li>
          <li className="icon">
            <a href="#" className="icon-link">
              <ShoppingCartIcon />
            </a>
          </li>
        </ul>
      </nav>

    </>
  );
};


export default Navbar;