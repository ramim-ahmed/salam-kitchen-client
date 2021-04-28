import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import firebaseConfig from './firebase.config';

const Login = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    const [, setLoggedInUser] = useContext(userContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
          sessionStorage.setItem('token', idToken)
         })
        .catch(function(error) {
            
        });
    }

    const handleGoogle = () => {

        const googleProvider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(googleProvider)
                    .then((result) => {

                       const {displayName, email} = result.user;
                       const newUser = {
                           user : displayName,
                           email : email
                       }
                        setLoggedInUser(newUser);
                        setUserToken();
                        history.replace(from)

                    }).catch((error) => {
                        
                        
                        var errorMessage = error.message;
                        console.log(errorMessage);
                    
                    });
    }
    return (
        <Row>
            <Col className = 'login-col'>
                 <Card>
                     <Card.Body>
                         <Button onClick = {handleGoogle} >Continue With Google</Button>
                     </Card.Body>
                 </Card>
            </Col>
        </Row>
    );
};

export default Login;