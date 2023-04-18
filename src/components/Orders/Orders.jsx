import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import "./Orders.css";
import OrdersProduct from '../OrdersProduct/OrdersProduct';
import { removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const cartData = useLoaderData()
    const [cart, setCart] = useState(cartData);
    //console.log(productData)
    const handaleRemoveCart =(id) =>{
        console.log(id);
       const filterData = cart.filter(cartData => cartData.id !== id);
       removeFromDb(id);
       setCart(filterData)
    }
    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(data => <OrdersProduct key={data.id} handaleRemoveCart ={handaleRemoveCart} product ={data}></OrdersProduct>)
                }
            </div>
            <div className='cart-container'>
            <Cart cart={cart}>
                    <Link className='proceed-link' to="/checkout">
                        <button className='checkout'>Proceed Checkout
                        <FontAwesomeIcon  icon={faShoppingCart} />
            
                        </button>
                    </Link>
            </Cart>
            </div>
        </div>
    );
};

export default Orders;