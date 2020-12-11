import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import HeaderImage from './headerPrivacity';
import { withRouter } from 'react-router-dom';

class PrivacityPage extends Component {
  render() {
    return (
            <HeaderImage/>
        )
  }
}

export default PrivacityPage;