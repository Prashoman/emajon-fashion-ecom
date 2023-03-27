import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shops.css';
const Shops = () => {
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        fetch('Product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                
                {
                    product.map(product => <Product key={product.id} product ={product}></Product>)
                }
            </div>
            <div>
                <h2>This Cart section</h2>
            </div>
        </div>
    );
};

export default Shops;