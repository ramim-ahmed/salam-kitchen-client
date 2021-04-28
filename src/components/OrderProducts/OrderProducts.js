import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';

const OrderProducts = (props) => {
    const {photo, name, price, quantiy} = props.item
    return (
                <>
                      <Card className='mt-3 ' style={{ width: '100%' }}>
                            <Card.Body className='purchase-card'>
                                <div>
                                    <Image className='photo-img' src={photo} thumbnail />
                               </div>
                               <div className='ml-4'>
                                    <h5>{name}</h5>
                                    <p><strong>${price}</strong></p>
                                    <Button className = 'plus-minus-btn'  variant="outline-primary" size="sm"><i className="fas fa-plus"></i></Button>
                                         {quantiy}
                                         <Button className = 'plus-minus-btn'  variant="outline-primary" size="sm"><i className="fas fa-minus"></i></Button>
                                    <p>Delivery Free</p>
                               </div>
                            </Card.Body>
                        </Card>         
                </>
    );
};

export default OrderProducts;