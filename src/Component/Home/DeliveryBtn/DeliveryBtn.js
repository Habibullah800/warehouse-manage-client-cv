import React, { useEffect, useState } from 'react';
import Delivery from '../Delivery/Delivery';
import ManageInventory from '../ManageInventory/ManageInventory';
import './DeliveryBtn.css'

const DeliveryBtn = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);
    return (
        <div className='product-container'>
            {
                products.map(product => <Delivery
                    key={product.id}
                    product={product}

                ></Delivery>)
            }


        </div>
    );
};

export default DeliveryBtn;