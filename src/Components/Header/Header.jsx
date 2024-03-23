import React from 'react';
import './Header.css'
import profile from '../../images/profile.png'
const Header = () => {
    return ( 
        <div className="headerOuterdiv">
          <nav className='header'>
           <h2 > Web Resource Hub</h2>
            {/* <div>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
            </div> */}
            <img src={profile} alt="" />
        </nav>
        </div>
      
    );
};

export default Header;