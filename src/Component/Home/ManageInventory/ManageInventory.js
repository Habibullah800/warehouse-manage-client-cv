import React from 'react';
import './ManageInventory.css'

import useProducts from '../../Hooks/useProduct';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'Delete'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })
        }
    }

    return (
        <div>
            <h2 className='text'> Here you can manage your inventory</h2>

            <div className='manage-page'>
                {
                    products.map(product => <div
                        key={product._id}
                    >
                        <div className='manage-product'>
                            <p className='product-info'>Product Name: {product.name}</p>
                            <p className='product-info'> Price:  {product.price} </p>
                            <p className='product-info'> Qty: {product.quantity} </p>
                            <img className='product-info' src={product.img} alt='pic'></img>
                            <button className='product-info btn btn-warning btn' onClick={() => handleDelete(product._id)}> Delete </button>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ManageInventory;
