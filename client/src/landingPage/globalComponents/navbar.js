import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import { Navbar,Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
class NavbarPage extends Component {
  componentWillMount(){

  }

  renderNavigationBar(){
    if(this.props.location.pathname !== "/login"){
      return true; 
    }
    return false
  }

  render() {
    
      return (
         this.renderNavigationBar() ? (
          <Navbar expand="lg" 
            >
            <Navbar.Brand>
              <Link to="/">
                <img
                    src="assets/img/icons/western.svg"
                    width="200"
                    height="80"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    className="mb-1"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="energy" className="nav-link">ENERGY</Link>
                  <Link to="smart-home" className="nav-link">SMART HOME</Link>
                  <Link to="vehicle" className="nav-link">VEHICLE</Link>
                  <Link to="water" className="nav-link">WATER</Link>
                </Nav>
                <Nav className="ml-auto">
                  <Link to="find-us" className="nav-link">FIND US</Link>
                  <Link to="login" className="nav-link">LOG IN</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        ) : (null)
      
    )
  }
}

// const Background = styled.div`
//     background-color: #DFDFDD;
//     position: absolute;
//     width: 100%;
//     height: all;
//     min-height: 100%;
//     display: flex;
//     justify-content: center;

// `;

const mapStateToProps = store => ({
  // logged: store.AppReducer.logged,
})

export default connect(mapStateToProps)(withRouter(NavbarPage));