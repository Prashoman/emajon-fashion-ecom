import React from 'react';
import './Product.css'


const Product = (props) => {
    console.log(props.product);
    const {id, name,img,ratings,price, seller} = props.product;
    return (
        <div className='product-items'>
           <img src={img} alt="" />
            <h3>{name}</h3>
            <div>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='cart-btn'>AddToCart</button>
        </div>
    );
};

export default Product;