import React, { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

const Item = (props) => {
    const {name, price, type, _id} = props.list;

    const [update, setUpdate] = useState(false);
    const [updateData, setUpdateData] = useState({});

    
    const handleDelete = (id) => {
        fetch(`https://warm-woodland-50987.herokuapp.com/delete/${id}`)
        .then( res => res.json())
        .then( result => {
            if(result){
                const container =  document.getElementById('container');
                container.style.display = 'none'
            }
        })
    }

    const handleEdit = (id) => {  

        setUpdate(!update);
        fetch(`https://warm-woodland-50987.herokuapp.com/singleProduct/${id}`)
        .then( res => res.json())
        .then( result => {
           setUpdateData(result)
        })
        
    } 

    
    return (
        <>
             <div id = 'container' className='manage-product'>
                        <div style={{width : "50%", paddingTop : '3px'}}>
                            <p><strong>{name}</strong></p>
                        </div>

                        <div style = {{paddingTop : '3px'}}>
                            <p><strong>{type}</strong></p>
                        </div>

                        <div style = {{paddingTop : '3px'}} >
                            <p><strong>${price}</strong></p>
                        </div>

                         <div>
                         <ButtonGroup>
                            <Button onClick = { () => handleEdit(_id)} size='sm'><i className="fas fa-edit"></i></Button>
                             <Button onClick = { () => handleDelete(_id)}  size='sm'><i className="fas fa-trash-alt"></i></Button>
                         </ButtonGroup>
                      </div>
          </div>
                    {
                        update && <>
                            <Form>
                                <Form.Group className='input-element'>
                                     <Form.Control id='product-name' defaultValue = {updateData.name} type ='text' placeholder='product name' />
                                </Form.Group>
                                <Form.Group className='input-element'>
                                     <Form.Control id='type' defaultValue = {updateData.type} type ='text' placeholder='Type' />
                                </Form.Group>
                                <Form.Group className='input-element'>
                                     <Form.Control id='price' defaultValue = {updateData.price} type ='text' placeholder='Price' />
                                </Form.Group>
                                <Button size = 'sm'>
                                    Update
                                </Button>
                            </Form>
                        </>
                    }
        </>
    );
};

export default Item;