import React from 'react';
import './ManageInventory.css'
import { Table } from 'react-bootstrap';
import useFirebase from '../../Hooks/UseFirebase';
import './ManageInventory.css'
const ManageInventory = ({ product }) => {
    const { user } = useFirebase()

    const { name, price, description, img, quantity } = product;


    return (
        <div className=''>



            <div >

                {
                    user?.uid
                        ?
                        <div className='manageItem' >


                            <Table striped bordered hover>

                                <tbody>
                                    <tr>
                                        <td>Name: {name}</td>
                                        <td> Price: {price}</td>
                                        <td> Qty:  {quantity}</td>
                                        <td><img src={img} alt='pic'></img></td>
                                        <button className='btn btn-warning'> Delete</button>

                                    </tr>


                                </tbody>
                            </Table>
                        </div>
                        :
                        <div >
                            <br></br>
                            <br></br>

                        </div>
                }
            </div>
        </div >
    );
};

export default ManageInventory;