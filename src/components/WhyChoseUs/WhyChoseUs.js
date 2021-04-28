import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Adult from '../../assets/adult-blur-blurred-background-687824.png';
import Architecture from '../../assets/architecture-building-city-2047397.png';
import ChefCook from '../../assets/chef-cook-food-33614.png';
import Services from './Services';

const WhyChoseUs = () => {
    const [choseUs, ] = useState([
               {
                   id : 1,
                   title : 'Fastest Delivery',
                   details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, libero vel porta interdum, ipsum lectus mollis magna, ac sodales enim lacus et libero. Duis mauris elit, sollicitudin eget tortor quis, porta malesuada est. ',
                   image : Adult
               },
               {
                   id : 2,
                   title : 'A Good Auto Responder',
                   details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, libero vel porta interdum, ipsum lectus mollis magna, ac sodales enim lacus et libero. Duis mauris elit, sollicitudin eget tortor quis, porta malesuada est. ',
                   image : ChefCook
               },
               {
                   id : 3,
                   title : 'Home Delivery',
                   details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, libero vel porta interdum, ipsum lectus mollis magna, ac sodales enim lacus et libero. Duis mauris elit, sollicitudin eget tortor quis, porta malesuada est. ',
                   image : Architecture
               }
    ])
    return (
        <Row className='mt-5'>
            <div className='ml-5 mb-4'>
                <h2>Why You chose Us ?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis, libero vel porta interdum, ipsum lectus mollis magna</p>
            </div>
           {
              choseUs.map( service => <Services key = {service.id} service = {service}/> )
           }
        </Row>
    );
};

export default WhyChoseUs;