
import React from 'react'
import '../../styles/App.css'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

 const Header=(props)=> {
  return (
    <div className='header'>
        <Navbar className='headNav' color="light" light expand="md">
          <NavbarBrand><span style={{fontWeight:'bolder',color:'blue'}}><i class="fas fa-mobile-alt"></i>PhoneKart</span><i class="fas fa-shopping-cart"></i></NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <input style={{marginTop:'7px'}}type="text" 
            placeholder="Search.." name="search"  value={props.searchText}
            onChange={e =>
              props.handleSearch(e.target.value)
          } />
            </NavItem>
              <NavItem>
                <NavLink>About Us</NavLink>
              </NavItem>
              <NavItem>
              <NavLink>Contact Us</NavLink>
              </NavItem>
              <NavItem>
              <NavLink>MyCart<i class="fab fa-opencart"></i> </NavLink>
              </NavItem>
            </Nav>
        </Navbar>
    </div>
  )
}
export default Header;
