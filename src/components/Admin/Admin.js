import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Item from './Item';

const Admin = () => {
    const [manageProduct, setManageProduct] = useState(true);
    const [addProduct, setAddProduct] = useState(false);
    const [manageProductList, setManageProductList] = useState([])

    const [textTypeData, setTextTypeData] = useState({
        name : '',
        description : '',
        price : ''
    })

    useEffect( () => {

        fetch('https://warm-woodland-50987.herokuapp.com/manageProduct')
        .then(res => res.json())
        .then( data => {
            setManageProductList(data)
        })
        
    }, [])

    const [photo,setPhoto] = useState('')

    const [type, setType ] = useState('');

    const handleTextTypeData = (e) => {
      const newSetData = {...textTypeData}
      newSetData[e.target.name] = e.target.value ;
      setTextTypeData(newSetData);
    }

    const handleImage = (e) => {

            const imgData = new FormData();
            imgData.set('key', '86468308d03edb3ab26827479053b75a');
            imgData.append('image', e.target.files[0]);
    
            axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setPhoto(response.data.data.display_url)
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
            console.log(error);
            });
       }


    const manageHandle = () => {
        setManageProduct(true);
        setAddProduct(false);
    }
    const addHandle = () => {
       setAddProduct(true);
       setManageProduct(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = {...textTypeData, type : type, photo : photo};
        console.log(productData);

        fetch('https://warm-woodland-50987.herokuapp.com/product', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(productData)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <>
           <Row className='card-row'>
               <Col md = {4}>
                   <Card className = 'admin-left-card'>
                       <Card.Title className='text-center mt-5'>Salam Kitchen</Card.Title>
                       <Card.Body  className='card-left-body'>
                           <div className="Manage-product mt-4">
                               <Button  onClick = {manageHandle} className='manageProductBtn'>
                                   Manage Food
                               </Button>
                           </div>
                           <div className="Manage-product mt-4">
                               <Button onClick = {addHandle} className='addProductBtn'>
                                    Add Food
                               </Button>
                           </div>
                       </Card.Body>
                   </Card>
               </Col>
               {
                   manageProduct && <Col md = {8} className='mt-4'>
                       <div className='manage-product'>
                           <div  style={{width : "50%"}}>
                               <h5>Product</h5>
                           </div>
                           <div>
                               <h5>Type</h5>
                           </div>
                           <div>
                               <h5>Price</h5>
                           </div>
                           <div>
                               <h5>Action</h5>
                           </div>
                       </div>
                   {
                      manageProductList.map( list => <Item list = {list}/>)
                   }
               </Col>
               }
               {
                   addProduct && <Col md = {8}>
                  <Card>
                      <Card.Body>
                            <Form onSubmit = {handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                     onChange = {handleTextTypeData}
                                     name = 'name' 
                                     type = 'text' 
                                     required
                                     placeholder ='enter Name'/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control 
                                     onChange = {handleTextTypeData}
                                    name = 'description' 
                                    as="textarea" 
                                    rows={3} 
                                    required
                                    placeholder = 'description' />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Select Food Type</Form.Label>
                                    <Form.Check
                                        id = 'breakfast'
                                        checked = {type ==='breakfast'}
                                        onChange = { (e) => setType( e.target.value)}
                                        value = 'breakfast' 
                                        type = 'radio' 
                                        required
                                        label = 'Breakfast'/>

                                    <Form.Check 
                                        id = 'lunch'
                                        checked = {type ==='lunch'}
                                         onChange = {(e) => setType(e.target.value)}
                                         value = 'lunch'
                                        type = 'radio' 
                                        required
                                        label = 'Lunch'/>

                                    <Form.Check 
                                        id = 'dinner'
                                        required
                                        checked = {type ==='dinner'}
                                        onChange = { (e) => setType(e.target.value)}
                                         value = 'dinner'
                                        type = 'radio' 
                                        label = 'Dinner'/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control 
                                     required
                                    onChange = {handleTextTypeData}
                                    name = 'price' 
                                    type = 'text'/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Upload Photo</Form.Label>
                                    <Form.Control 
                                     required
                                    onChange = {handleImage}
                                    type = 'file'/>
                                </Form.Group>
                                <Button type = 'submit' >
                                    Save
                                </Button>
                            </Form>
                      </Card.Body>
                  </Card>
               </Col>
               }
           </Row>
        </>
    );
};

export default Admin;