import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import HeaderImage from './headerEnergy';
import { withRouter } from 'react-router-dom';

class EnergyPage extends Component {
  render() {
    return (
            <HeaderImage/>
        )
  }
}

export default EnergyPage;