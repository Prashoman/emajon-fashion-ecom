import React from 'react';
import "./OrdersProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const OrdersProduct = ({product,handaleRemoveCart}) => {
    //console.log(product)
    const {id,name,img,price,shipping} = product;
    return (
        <div className='OrderProducts'>
           <img src={img} alt="" />
           <div className='order-Items'>
                <h3>{name}</h3>
                <p>Price: ${price} </p>
                <h4>Shipping Charge : ${shipping}</h4>
            </div>
            <button onClick={() =>handaleRemoveCart(id)} className='deleted-btn'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
           
        </div>
    );
};

export default OrdersProduct;