import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import HeaderImage from './headerWater';
import { withRouter } from 'react-router-dom';

class WaterPage extends Component {
  render() {
    return (
            <HeaderImage/>
        )
  }
}

export default WaterPage;