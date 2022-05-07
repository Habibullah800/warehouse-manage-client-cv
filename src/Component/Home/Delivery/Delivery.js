import React, { useState } from 'react';
import './Delivery.css'
const Delivery = ({ product }) => {
    const { name, price, description, img, quantity } = product;

    const newQuantity = parseInt(quantity)

    const [count, setCount] = useState(newQuantity);
    const deliveryQuantity = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div>

            <div className='product'>

                <img src={img} alt="pic" />
                <h2>{name}</h2>
                <p>Quantity : {count}</p>
                <p>Price: ${price}</p>
                <p><small>{description}</small></p>

                <button className='btn btn-primary' onClick={deliveryQuantity}> Delivery </button>
                {/* <Link className='btn btn-primary' to='/login'> Update</Link> */}
            </div>
        </div>
    );
};

export default Delivery;