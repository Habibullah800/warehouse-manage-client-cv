import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';
import "./AddItem.css"


const AddItem = () => {
    const { user } = useFirebase()
    return (
        <div className='addItem'>
            <h2 className='mb-5 mt-4'>Here you can add any Item</h2>

            {
                user?.uid
                    ?
                    <div >
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    :
                    <Link className='btn btn-primary' to='/login'> Please log-in</Link>
            }

        </div>
    );
};

export default AddItem;