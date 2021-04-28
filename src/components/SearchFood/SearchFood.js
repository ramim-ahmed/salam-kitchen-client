import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SearchFood = () => {
    return (
        <>
            <Form>
                <Form.Group>
                      <Form.Control type = 'text' placeholder = 'seach...'/>
                </Form.Group>
                <Button  variant="primary" size="sm">
                    Search
                </Button>
            </Form>
        </>
    );
};

export default SearchFood;