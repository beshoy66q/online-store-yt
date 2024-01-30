import React from 'react';
import "./header.styles.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from "../../imgs/Logo.png";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const HeaderComponent = () => {
    return (
        <>
            <div className="alert">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">Shop Now</a></p>
                <span>English <ExpandMoreIcon /></span>
            </div>
            <header>
                <div className="container">
                <div className="header-left">
                    <a href="#home" className="logo"><img src={logo} alt="" /></a>
                </div>
                <div className="header-middle">
                    <ul className="nav">
                        <li><a href="#home" className='active'>Home</a></li>
                        <li><a href="#home">Contact</a></li>
                        <li><a href="#home">About</a></li>
                        <li><a href="#home">Sign Up</a></li>
                    </ul>
                </div>
                <div className="header-right">
                    <div className="search-box">
                        <input type="text" placeholder='What are you looking for?'/>
                      <SearchIcon className='icon'/>
                    </div>
                    <FavoriteBorderIcon className='heart-icon'/>
                    <ShoppingCartIcon className='cart-icon'/>
                </div>
                </div>
            </header>
        </>
    );
}

export default HeaderComponent;
