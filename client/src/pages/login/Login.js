import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import LoginWindow from './LoginWindow';
import { withRouter } from 'react-router-dom';
import {
  Icon,
} from 'antd'

class Login extends Component {
  componentWillMount(){
    // if(this.props.logged){
    //   this.props.history.push('/overview')
    // }
  }
  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
        <Background>
          {/* <Icon type="left" style={{ textAlign: 'left !important', padding: '50px', fontSize: '1.5em' }} /> */}
          <LoginWindow />
        </Background>
        )
  }
}

const Background = styled.div`
    background-image: url('assets/img/icons/login-bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: all;
    min-height: 100%;
    display: flex;
`;

const mapStateToProps = store => ({
  // logged: store.AppReducer.logged,
})

export default connect(mapStateToProps)(withRouter(Login));