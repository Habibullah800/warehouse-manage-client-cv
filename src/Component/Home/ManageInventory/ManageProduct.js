import React from 'react';
import useFirebase from '../../Hooks/UseFirebase';
import ManageInventory from './ManageInventory';
import './ManageInventory.css'

const ManageProduct = () => {
    const { user } = useFirebase()
    return (
        <div>
            {
                user?.uid
                    ?
                    <div className='manageItem' >
                        <ManageInventory></ManageInventory>
                    </div>
                    :
                    <div >
                        <br></br>
                        <h3 className='login'> Please log in First</h3>
                        <img src='https://i.ibb.co/5cmfzJQ/download.png' alt='pic'></img>
                    </div>
            }
        </div>
    );
};

export default ManageProduct;