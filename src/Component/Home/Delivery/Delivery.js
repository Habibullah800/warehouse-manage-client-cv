import React from 'react';
import './Delivery.css'
const Delivery = ({ product }) => {
    const { name, price, description, img } = product;
    return (
        <div>

            <img src={img} alt="pic" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>

        </div>
    );
};

export default Delivery;