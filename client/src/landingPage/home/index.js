import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import HeaderImage from './headerHome';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
            <HeaderImage/>
        )
  }
}

export default HomePage;