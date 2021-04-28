import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Services = (props) => {
    const {image, title, details} = props.service
    return (
        <Col md = {4}>
            <Card style = {{border : 'none'}}>
                <Card.Header>
                   <Card.Img    src={image}/>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                     {details}
                    </Card.Text>
                    <Button size='sm' variant="primary">See More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;