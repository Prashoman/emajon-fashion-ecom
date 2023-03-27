import React from 'react';
import './Product.css'


const Product = (props) => {
   // console.log(props);
    const {id, name,img,ratings,price, seller} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product-items'>
           <img src={img} alt="" />
            <h3>{name}</h3>
            <div>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>AddToCart</button>
        </div>
    );
};

export default Product;