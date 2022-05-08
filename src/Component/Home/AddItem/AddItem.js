import { Toast } from 'bootstrap';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';
import "./AddItem.css"


const AddItem = () => {
    const confirmation = () => {
        window.confirm("Added successfully")
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    const { user } = useFirebase()
    return (
        <div className='addItem'>
            <h2 className='mb-5 mt-4'>Here you can add any Item</h2>

            {
                user?.uid
                    ?
                    <div className=' mx-auto form' >
                        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                            <input className='mb-3 ps-3 ' type='text' placeholder='Product Name' {...register("name", { require: true, maxLength: 20 })}></input>

                            <textarea className='mb-3 ps-3' type='text' placeholder='Short Description' {...register("description", { require: true, maxLength: 60 })}></textarea>

                            <input className='mb-3 ps-3' type='text' placeholder='Supplier Name' {...register("supplier", { require: true, maxLength: 60 })}></input>

                            <input className='mb-3 ps-3' type='email' placeholder='Supplier Email' {...register("email", { require: true, maxLength: 60 })}></input>

                            <input className='mb-3 ps-3' type='number' placeholder='Price' {...register("price", { require: true, maxLength: 60 })}></input>

                            <input className='mb-3 ps-3' type='number' placeholder='Quantity' {...register("quantity", { require: true, maxLength: 60 })}></input>

                            <input className='mb-3 ps-3' type='text' placeholder='Image URL' {...register("img", { require: true, maxLength: 60 })}></input>

                            <input className='w-50 mx-auto btn btn-warning' type="submit" onClick={confirmation}></input>

                        </form>
                    </div>
                    :
                    <Link className='btn btn-primary' to='/login'> Please log-in</Link>
            }

        </div>
    );
};

export default AddItem;