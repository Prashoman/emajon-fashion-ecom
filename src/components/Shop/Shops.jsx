import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shops.css';
const Shops = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('Product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
    const handleAddToCart =(product) =>{
       const newArrayCart = [...cart, product];
       setCart(newArrayCart)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                
                {
                    product.map(product => <Product handleAddToCart ={handleAddToCart} key={product.id} product ={product}></Product>)
                }
            </div>
            <div>
                <h2>This Cart section :{cart.length}</h2>
            </div>
        </div>
    );
};

export default Shops;