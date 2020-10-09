
import React, { Component } from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PhoneStore from './components/PhoneStore';
import LappyStore from './components/LappyStore';
import Cart from './components/Cart'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
         <Router>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/phonstore" component={PhoneStore}/>
             <Route exact path="/lapstore" component={LappyStore}/>
             <Route exact path="/cart" component={Cart}/>
           </Switch>
         </Router>
    );
  }
}
export default App;