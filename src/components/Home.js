import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../styles/Home.css';
import lap from './images/lap.jpg'
import phone from './images/phone.jpg'
import {
    Link,
  } from "react-router-dom";

 class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="home-container">   
        <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Exclusive Smartphones</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="/phonstore"><img className='menu-img' src={phone}/></Link> 
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Exclusive Laptops</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
         <Link to="/lapstore"><img className='menu-img' src={lap}/></Link> 
        </Card>
      </Col>
    </Row>
      </div>
    )
  }
}

  
  export default Home;

