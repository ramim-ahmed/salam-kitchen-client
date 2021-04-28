import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const {_id, photo, name, price, description} = props.item
    return (
            <Col className = 'mt-4' md = '4'>
                <Link to = {`/menuItem/${_id}`}>
                    <Card className = 'product-card' style={{ width: '22rem' }}>
                        <div>
                            <Card.Img variant="top" className = 'product-photo' src={photo} />
                        </div>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <p><strong>${price}</strong> </p>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        
    );
};

export default Products;