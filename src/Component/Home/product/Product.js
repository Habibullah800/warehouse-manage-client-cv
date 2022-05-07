import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';
import './Product.css'
const Product = ({ service }) => {
    const { name, price, description, img } = service;
    const { user } = useFirebase()

    return (
        <div className='service'>
            <img src={img} alt="pic" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>

            {
                user?.uid
                    ?
                    <div >
                        <Link className='btn btn-primary' to='/delivery'> Update </Link>
                    </div>
                    :
                    <Link className='btn btn-primary' to='/login'> Update</Link>
            }



        </div>
    );
};

export default Product;