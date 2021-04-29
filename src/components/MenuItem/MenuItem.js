import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { orderContext, userContext } from '../../App';

const MenuItem = () => {
    const {id} = useParams();
    const [menuItem, setMenuItem] = useState({})
    const [loggedInUser, ] = useContext(userContext);
    const [, setOrder] = useContext(orderContext);
    const [addProduct, setAddProduct] = useState(false)

    useEffect( () => {
        fetch('https://warm-woodland-50987.herokuapp.com/cartItem?email='+loggedInUser.email)
        .then(res => res.json())
        .then( data => {
            setOrder(data)
        })
    }, [loggedInUser, setOrder])

    useEffect( () => {
        fetch(`https://warm-woodland-50987.herokuapp.com/menuItem/${id}`)
        .then( res => res.json())
        .then( data => {
            setMenuItem(data)
        })
    }, [id])
    
    const {name, photo, price,} = menuItem;
    

    const handleAddProduct = () => {
        const userOrder = {...loggedInUser, ...menuItem, quantiy : 1};
        fetch('https://warm-woodland-50987.herokuapp.com/order', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(userOrder)
        })
        .then( res => res.json())
        .then( result => {
            console.log(result);
            setAddProduct(true)
        })
    }

    return (
            <Row className='menuItem-container mt-5'>
                 <Col md = {4}>
                    <Card style={{ width: '100%', border : 'none',  }}>
                             <Link to = "/"><i class="fas fa-arrow-left"></i> Back</Link>
                        <Card.Body className='text-center-left'>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper pharetra mi, vel vehicula felis dignissim id. Integer molestie ante non elit commodo porta. Integer porta posuere scelerisque. Suspendisse semper maximus nisi </p>
                                    <div className="price-quantity">
                                    <span>
                                            <p> <strong>${price} </strong> </p>
                                    </span>
                                    <span>
                                        <Button className = 'plus-minus-btn'  variant="outline-primary" size="sm"><i className="fas fa-plus"></i></Button>
                                         1 
                                         <Button className = 'plus-minus-btn'  variant="outline-primary" size="sm"><i className="fas fa-minus"></i></Button>
                                    </span>
                                    </div>
                                    </Card.Text>
                                    <Button onClick = {handleAddProduct}  variant="primary"><i class="fas fa-cart-plus"></i> Add Cart</Button>
                                    {
                                        !addProduct ? '' : <p>Product Added To Cart</p>
                                    }
                        </Card.Body>
                    </Card>
                </Col>
                <Col md = {8}>
                    <Card style={{ width: '18rem', border: 'none' }}>
                            <Card.Img variant="top" src={photo} />
                    </Card>
                </Col>
            </Row>
    );
};

export default MenuItem;