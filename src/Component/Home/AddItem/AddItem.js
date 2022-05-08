import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';
import "./AddItem.css"


const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useFirebase()
    return (
        <div className='addItem'>
            <h2 className='mb-5 mt-4'>Here you can add any Item</h2>

            {
                user?.uid
                    ?
                    <div >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input{...register("firstName", { require: true, maxLength: 20 })}></input>
                            <input{...register("firstName", { require: true, maxLength: 20 })}></input>
                            <input{...register("firstName", { require: true, maxLength: 20 })}></input>
                            <input type="submit"></input>

                        </form>
                    </div>
                    :
                    <Link className='btn btn-primary' to='/login'> Please log-in</Link>
            }

        </div>
    );
};

export default AddItem;