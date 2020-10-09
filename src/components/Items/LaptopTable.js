import React, {Component} from 'react'
import {Row, Col,Button } from 'reactstrap';
import '../../styles/App.css';
import { connect } from "react-redux";
import {getInventoryRequest} from '../../redux/actions';


class LaptopTable extends Component {
  
  componentDidMount(){
    if(this.props && this.props.getInventory){
      this.props.getInventory()
      }
  }

  render(){
    console.log(this.props.inventory_data,'kkkkkkkkkkkkkkkkkkkkkk')
    let filteredData = this.props.inventory_data.filter( function (v) {
      return v.isLaptop == true
    });
    return(
      <div className='tabCont'>
      {filteredData.map((v,i)=>(
        <div>
           <Row className='items'>
         <Col xs="6" sm="4"> 
         <img style={{height:'60%',maxWidth:'100%',marginLeft:'0%'}} src={v.thumbnailUrl}/>
         </Col>

         <Col xs="6" sm="4">
         <h5 style={{marginBottom:'0'}}>{v.title}</h5>
         <p style={{fontWeight:'bolder',marginTop:'0',marginBottom:'0'}}><i class="fas fa-user"></i><i class="fas fa-star"></i>{v.rating}</p>
         <p style={{marginBottom:'0'}}><span style={{color:'#660000'}}>Description:</span><i class="far fa-arrow-alt-circle-right"></i>&nbsp;{v.description}</p>
         <Button style={{marginTop:'5px'}} color="info">Buy Now &nbsp;<i class="fas fa-hand-holding-usd"></i></Button>
         </Col>

         <Col sm="4">
         <div style={{width:'80%'}}>
         <h5 style={{float:'left'}}>Price: &#8377;{v.price}</h5>
         <img style={{float:'right',width:'35%'}} src={"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png"}/>
         </div>

         <div style={{marginTop:'50px'}}>
         <p style={{margin:'0'}}>Upto <span style={{fontWeight:'bolder'}}>&#8377;8000 </span>off on Exchange</p>
         <p style={{margin:'0'}}>EMI starting from <span style={{fontWeight:'bolder'}}>&#8377;400/Month</span> </p>
         <p style={{margin:'0',color:'#660000'}}>Diwali Offer<span style={{fontWeight:'bolder'}}> &#8377;500</span> Off on All</p>
         </div>
         
             <p style={{color:'#334d00',marginTop:'25px',fontWeight:'bolder'}}>Offers</p>
             <ul>
                 <li>Trending Smartphone</li>
                 <li>No Cost EMI</li>
                 <li>Special Prize</li>
                 <li>Diwali Offer</li>
             </ul>
         
         </Col>
         </Row>
        </div>
      ))}
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
)(LaptopTable);