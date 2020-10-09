import React, { Component } from 'react';
import { connect } from "react-redux";
import '../styles/App.css';
import {getInventoryRequest} from '../redux/actions';
import Header from './view/Header';
import SmartphoneTable from './Items/SmartphoneTable';
import Sidenav from './view/Sidenav';

 class PhoneStore extends Component {
   state={
     searchText:''
   }
   componentDidMount(){
     if(this.props && this.props.getInventory){
     this.props.getInventory()
     }
   }

   handleSearchCall = search => {
     this.setState({searchText:search})
     
   }

  render() {
    return (
      <div>
      <Header inputVal={this.state.searchText} handleSearch={searchData => this.handleSearchCall(searchData)}/>
        <div className="cont">
           <div className="leftSection">
             <Sidenav/>
           </div>
           <div className="rightSection">
             <SmartphoneTable searched={this.state.searchText}/>
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
)(PhoneStore);