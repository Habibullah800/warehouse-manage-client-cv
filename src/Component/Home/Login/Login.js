import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../../firebase.init';
import useFirebase from '../../Hooks/UseFirebase';
import DeliveryBtn from '../DeliveryBtn/DeliveryBtn';
import './Login.css'
const auth = getAuth(app);
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const { user } = useFirebase()

    const [email, setEmail] = useState()

    const [error, setError] = useState([]);
    const [varification, setVerification] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        setEmail(emailRef.current.value);
        const password = passwordRef.current.value;


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);


            })
        // Email and password

    }



    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setVerification("Cheak your email !");

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }

    const { signInWithGoogle } = useFirebase();



    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='login-container'>
            <h3>{user?.uid ? 'Congrats' : "Please Login"}</h3>


            {
                user?.uid
                    ?
                    <div className='mb-4' >
                        <DeliveryBtn></DeliveryBtn>
                    </div>
                    :
                    <div>
                        <button className='btn btn-primary' onClick={signInWithGoogle}> Log-in with Google</button>
                        <br></br>
                        <br></br>
                    </div>
            }
            {/* ----------------------------------------- */}
            {
                user?.uid
                    ?
                    <div className='mb-4' >

                    </div>

                    :
                    <div>
                        <h4>Or</h4>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <input className='w-25' ref={emailRef} type='text' placeholder='Your Email' required></input>
                                <br></br>
                                <br></br>
                            </Form.Group>


                            <Form.Group>
                                <input className='w-25' ref={passwordRef} type='password' placeholder='Password' required></input>
                                <br></br>
                            </Form.Group>
                            <br></br>

                            <input className='btn btn-primary' type='submit' value='Login' ></input>
                            <br></br>
                            <p className='text-danger'><small> {error}</small>
                            </p>
                            <br></br>
                            <Button onClick={handlePasswordReset} variant="link">Forget Password ?</Button>
                            <br></br>
                            <p>{varification}</p>
                        </Form>

                        <p className='mt-4'> New to this Kent Fashion website? <br></br>
                            <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Click here to Register</Link>
                        </p>
                    </div>
            }


        </div >
    );
};

export default Login;