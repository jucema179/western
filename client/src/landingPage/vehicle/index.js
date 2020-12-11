import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import HeaderImage from './headerVehicle';
import { withRouter } from 'react-router-dom';

class VehiclePage extends Component {
  render() {
    return (
            <HeaderImage/>
        )
  }
}

export default VehiclePage;