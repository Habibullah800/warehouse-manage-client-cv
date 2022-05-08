import React, { useState } from 'react';
import useProducts from '../Hooks/useProduct';
import '../Home/ManageInventory/ManageInventory.css'
import './MyItem.css'


const MyItem = () => {


    const [products, setProducts] = useProducts();

    const [myProduct, setmyProduct] = useState();

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
        <div >

            <h2 className='mt-5'>My all item</h2>

            <div className='manageItem'>


                {
                    products.slice(3, 20).map(product => <div
                        key={product._id}
                    >

                        <div className='manage-product'>
                            <p className='product-info'>Product Name: {product.email}</p>
                            <p className='product-info'> Price:  {product.price} </p>
                            <p className='product-info'> Qty: {product.quantity} </p>
                            <img className='product-info' src={product.img} alt='pic'></img>
                            <button className='product-info btn btn-warning btn' onClick={() => handleDelete(product._id)}> Delete </button>
                        </div>


                        {/* <p> {product.name} {product.email}

                            <button onClick={() => handleDelete(product._id)}> X</button> </p> */}
                    </div>)
                }



            </div>

        </div >
    );
};

export default MyItem;


