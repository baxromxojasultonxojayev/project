import React, {useState} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ListIcon from '@material-ui/icons/List';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CategoriesSection = () => {

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div className="categories">
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="btn-group" caret>
          <ListIcon />
          All Categories
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Menu 1</DropdownItem>
          <DropdownItem>Menu 2</DropdownItem>
          <DropdownItem>Menu 3</DropdownItem>
          <DropdownItem id='responsiveIcon'>
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
          </DropdownItem>

        </DropdownMenu>
      </ButtonDropdown>

      <ul className="links">
        <li className="link-item">
          <a href="#" className="link active">
            Home
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link ">
            New arrivals
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link ">
            Trending
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link ">
            Deals for you
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link ">
            Discounts
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link ">
            Weekly Offers
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link ">
            Become A Ventor 
          </a>
        </li> 
      </ul>
    </div>
  );
};


export default CategoriesSection;