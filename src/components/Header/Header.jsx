import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header-container'>
                <img src={Logo} alt="" />
                <div className='menu-link'>
                    <a href="/link">Order</a>
                    <a href="/Order Review">Order Review </a>
                    <a href="/Manage Inventory">Manage Inventory</a>
                    <a href="/Login">Login</a>
                    
                </div>
            </nav>
        </div>
    );
};

export default Header;