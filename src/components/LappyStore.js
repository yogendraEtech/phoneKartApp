import React, { Component } from 'react';
import { connect } from "react-redux";
import '../styles/App.css';
import {getInventoryRequest} from '../redux/actions';
import Header from './view/Header';
import LaptopTable from './Items/LaptopTable';
import Sidenav from './view/Sidenav';

 class LappyStore extends Component {
   componentDidMount(){
     if(this.props && this.props.getInventory){
     this.props.getInventory()
     }
   }
  render() {
    return (
      <div>
      <Header/>
        <div className="cont">
           <div className="leftSection">
             <Sidenav/>
           </div>
           <div className="rightSection">
             <LaptopTable/>
           </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
  inventory_data: state.inventorydetails.inventorydata.data,

});
const mapDispatchToProps = dispatch => ({
 
  getInventory: () => dispatch(getInventoryRequest())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LappyStore);