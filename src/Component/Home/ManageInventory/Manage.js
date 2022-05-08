import React, { useEffect, useState } from 'react';

import ManageInventory from './ManageInventory';

const Manage = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);
    return (
        <div>
            {
                products.map(product => <ManageInventory
                    key={product.id}
                    product={product}
                ></ManageInventory>)
            }
        </div>
    );
};

export default Manage;