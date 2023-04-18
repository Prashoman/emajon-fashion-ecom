import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../../Provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContextProvider)

    const handleSingOut = () =>{
        logOut()
        .then( () =>{
            console.log("LoggedOut")
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ?'': <Link to="/login">Login</Link>
                }
                
                {
                    user && 
                    <span className='text-white'>Welcome {user.email} <button onClick={handleSingOut}> Log out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;