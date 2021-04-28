import React, { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { orderContext } from '../../App';
import OrderProducts from '../OrderProducts/OrderProducts';

const Cart = () => {

    const [order,] = useContext(orderContext);
    const totalPrice = order.reduce( (total, item) => total + item.price, 0)
    return (
        <>
            <Row className = 'mt-5'>
                <Col md = {4}>
                   <Card>
                       <Card.Title className='text-center mt-3'>Deliver Details</Card.Title>
                       <Card.Body>
                           <Form>
                               <Form.Group>
                                <Form.Control type = 'text' defaultValue = 'Deliver To door'/>
                               </Form.Group>
                               <Form.Group>
                                <Form.Control type = 'text' defaultValue = 'House #107, Road #8'/>
                               </Form.Group>
                               <Form.Group>
                                <Form.Control type = 'text' placeholder='Flat, Suite or Floor'/>
                               </Form.Group>
                               <Form.Group>
                                <Form.Control type = 'text' placeholder='Business Name'/>
                               </Form.Group>
                               <Form.Group>
                                    <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    required
                                    placeholder = 'Add Delivery Instruction' />
                                </Form.Group>

                                <Button size = 'sm' block> 
                                    Save and continue
                                </Button>
                           </Form>
                       </Card.Body>
                   </Card>
                </Col>
                <Col md = {8}>
                        {
                            order.map( item => <OrderProducts item = {item}/>)
                        }

                    <div className="grand-total">
                        <p><strong>Total</strong></p>
                        <p><strong>${totalPrice}</strong></p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Cart;