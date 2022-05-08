import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    const addQuantity = () => {
        if (count >= 0) {
            setCount(count + 1);
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

                <button className='btn btn-primary me-5' onClick={deliveryQuantity}> Delivery </button>

                <button className='btn btn-primary me-5' onClick={addQuantity}> Add stock </button>


                <Link to='/addItem'>
                    <button className='btn btn-warning' > Add extra Item </button>
                </Link>


            </div>
        </div>
    );
};

export default Delivery;