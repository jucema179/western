import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import HeaderImage from './headerFindUS';
import { withRouter } from 'react-router-dom';

class FindUSPage extends Component {
  render() {
    return (
            <HeaderImage/>
        )
  }
}

export default FindUSPage;