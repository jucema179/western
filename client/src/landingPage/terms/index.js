import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import HeaderImage from './headerTerms';
import { withRouter } from 'react-router-dom';

class TermsPage extends Component {
  render() {
    return (
            <HeaderImage/>
        )
  }
}

export default TermsPage;