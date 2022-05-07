import React, { useEffect, useState } from 'react';
import Delivery from '../Delivery/Delivery';
import Product from '../product/Product';

const DeliveryBtn = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);
    return (
        <div>
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