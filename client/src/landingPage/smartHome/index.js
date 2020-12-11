import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import HeaderImage from './headerSmartHome';
import { withRouter } from 'react-router-dom';

class SmartHomePage extends Component {
  render() {
    return (
            <HeaderImage/>
        )
  }
}

export default SmartHomePage;