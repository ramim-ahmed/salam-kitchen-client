import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { orderContext } from '../../App';

const Header = () => {
    const [order, ] = useContext(orderContext)
    return (
        <>
            <Navbar bg="light" variant="light">
                    <Navbar.Brand>
                        <Link className='font-weight-bold' to = '/' >
                            SALAM KITCHEN
                        </Link>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link>
                      <Link to = '/home' >
                          Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to = '/admin' >
                          Admin
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to = '/login' >
                            Login
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to = '/cart'>
                             <span><i className="fas fa-cart-plus"></i></span>
                             <span> {order.length} </span>
                        </Link>
                    </Nav.Link>
            </Nav>
        </Navbar>
        </>
    );
};

export default Header;