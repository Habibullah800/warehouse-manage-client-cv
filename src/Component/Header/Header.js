import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase()
    const photo = user?.photoURL
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Kent Fashion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Link className='navText' to="/">Home</Link>

                            {
                                user?.uid
                                    ?
                                    <Link className='navText' to="/myitem">My Item</Link>
                                    :
                                    <div ></div>
                            }


                            <Link className='navText' to="/addItem">Add Item</Link>
                            <Link className='navText' to="/blog">blog</Link>


                        </Nav>
                        <Nav>

                            {
                                user?.uid
                                    ?
                                    <Link className='navText mt-1' to="/manageInventory">Manage Inventory</Link>
                                    :
                                    <div ></div>
                            }

                            <Link className='navText me-4 mt-1' to="/about">About</Link>
                            <span className='userName me-2 mt-1'> {user?.displayName && user.displayName}</span>

                            <span> <img className='photo me-2 ' src={photo} alt=''></img></span>

                            {
                                user?.uid
                                    ?
                                    <div className='dropdown'>
                                        <button className='btn btn-success' onClick={handleSignOut}>Sign Out
                                            <i className='fa fa-caret-down'></i>
                                        </button>
                                    </div>
                                    :
                                    <Link className='navText' to='/login'> Login</Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;