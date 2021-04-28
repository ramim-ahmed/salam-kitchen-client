import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';

const Home = () => {
    const [breakfastConditon, setBreakfastCondition] = useState(true);
    const [lunchConditon, setLunchCondition] = useState(false);
    const [dinnerConditon, setdinnerCondition] = useState(false);
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    
    useEffect( () => {

        const foodType = 'breakfast';    
         
        fetch('https://warm-woodland-50987.herokuapp.com/breakfast?type='+foodType)
        .then(res => res.json())
        .then( data => {
            setBreakfast(data)
            console.log(data);
        })
    }, [])


    useEffect( () => {

        const foodType = 'lunch';
      
        fetch('https://warm-woodland-50987.herokuapp.com/lunch?type='+foodType)
        .then(res => res.json())
        .then( data => {
            setLunch(data)
        })

    }, [])


    useEffect( () => {
        const foodType = 'dinner';
      
        fetch('https://warm-woodland-50987.herokuapp.com/dinner?type='+foodType)
        .then(res => res.json())
        .then( data => {
            setDinner(data)
        })
    }, [])
  
    const handleBreakfast = () => {
      setBreakfastCondition(true);
      setLunchCondition(false);
      setdinnerCondition(false);
    }
    
    const handleLunch = () => {
       setLunchCondition(true);
       setBreakfastCondition(false);
       setdinnerCondition(false);
      
    }

    const handleDinner = () => {
       setdinnerCondition(true);
       setBreakfastCondition(false);
       setLunchCondition(false);

    }
    return (
        <>
            <Banner/>
          <Row>
              <Col>
                    <Card className = 'btn-card mt-5'>
                    <Card.Body className = 'btn-card-body'>
                            <div className="btn-container">
                                <div className="breakfast-btn">
                                    <Button 
                                    onClick = {handleBreakfast}
                                    className= 'type-food-btn' 
                                    type = 'button'  
                                    size="sm"
                                    > Breakfast </Button>
                                </div>
                                <div className="lunch-btn">
                                    <Button
                                    onClick = {handleLunch}
                                     className= 'type-food-btn'
                                      type = 'button'  
                                      size="sm"
                                      > Lunch </Button>
                                </div>
                                <div className="dinner-btn">
                                    <Button 
                                    onClick = {handleDinner}
                                    className= 'type-food-btn'
                                     type = 'button'  
                                     size="sm"
                                     > Dinner </Button>
                                </div>
                            </div>
                    </Card.Body>
                </Card>
              </Col>
          </Row>
           <Row className = 'mt-5 mb-5'>
              {
                  breakfastConditon && <>
                      {
                          breakfast.map( item => <Products item = {item}/>)
                      }
                  </>
              }
              {
                  lunchConditon && <>
                        {
                          lunch.map( item => <Products item = {item}/>)
                        }
                  </>
              }
              {
                  dinnerConditon && <>
                          {
                              dinner.map( item => <Products item = {item}/>)
                          }
                  </>
              }
           </Row>

           <Row>
               <WhyChoseUs/>
           </Row>
           <Row>
               <Footer/>
           </Row>
        </>
    );
};

export default Home;