import { createContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import {
     BrowserRouter as Router,

     Route, Switch
} from "react-router-dom";
import './App.css';
import Admin from './components/Admin/Admin';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MenuItem from './components/MenuItem/MenuItem';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();
export const orderContext = createContext()

function App() {
 const [loggedInUser, setLoggedInUser] = useState({});
 const [order, setOrder] = useState([])
  return (
    <>
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <orderContext.Provider value = {[order, setOrder]}>
    <Container>
       <Router>
           <Header/>
           <Switch>
             <Route exact path = '/'>
                  <Home/>
             </Route>
             <Route  path = '/home'>
                  <Home/>
             </Route>
             <PrivateRoute  path = '/admin'>
                  <Admin/>
             </PrivateRoute>s
             <Route  path = '/login'>
                  <Login/>
             </Route>
             <PrivateRoute  path = '/cart'>
                 <Cart/>
             </PrivateRoute>
             <PrivateRoute  path = '/menuItem/:id'>
                 <MenuItem/>
             </PrivateRoute>
           </Switch>
       </Router>
    </Container>
    </orderContext.Provider>
    </userContext.Provider>
    </>
  );
}

export default App;
