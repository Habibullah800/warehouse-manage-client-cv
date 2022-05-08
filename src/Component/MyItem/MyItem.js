import React from 'react';
import useProducts from '../Hooks/useProduct';

const MyItem = () => {
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

            <h2 className='mt-5'>My all item</h2>

            {
                products.map(product => <div
                    key={product._id}
                >
                    <p> {product.name} <button onClick={() => handleDelete(product._id)}> X </button></p>


                </div>)
            }

        </div>
    );
};

export default MyItem;