import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import { Image, Button, Col, Container, Row, Form } from 'react-bootstrap';

class NavbarPage extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <Footer
            >
                <Container className="text-center div-padding">
                    <Row style={{ marginBottom: '25px' }}>
                        <Col xs={12} lg={4}>
                            <Image src="assets/img/icons/western.png" style={{ width: '70%', marginBottom: '25px' }} height="auto" />
                        </Col>
                        <Col xs={6} lg={2} className="offset-lg-5 offset-sm-4 offset-4">
                            <Row>
                                <Col xs={6} lg={6}>
                                    <Row>
                                        <p style={{ color: '#FFFFFF', fontSize: '0.8em' }}><Link to="energy" style={{ textDecoration: 'none' }} className="footer-menu">ENERGY</Link></p>
                                    </Row>
                                    <Row>
                                        <p style={{ color: '#FFFFFF', fontSize: '0.8em' }}><Link to="water" style={{ textDecoration: 'none' }} className="footer-menu">WATER</Link></p>
                                    </Row>
                                    <Row>
                                        <p style={{ color: '#FFFFFF', fontSize: '0.8em' }}><Link to="vehicle" style={{ textDecoration: 'none' }} className="footer-menu">VEHICLE</Link></p>
                                    </Row>
                                </Col>
                                <Col xs={6} lg={6} >
                                    <Row>
                                        <p style={{ color: '#FFFFFF', fontSize: '0.8em' }}><Link to="smart-home" style={{ textDecoration: 'none' }} className="footer-menu">SMART HOME</Link></p>
                                    </Row>
                                    <Row>
                                        <p style={{ color: '#FFFFFF', fontSize: '0.8em' }}><Link to="find-us" style={{ textDecoration: 'none' }} className="footer-menu">FIND US</Link></p>
                                    </Row>
                                    <Row>
                                        <p style={{ color: '#FFFFFF', fontSize: '0.8em' }}><Link to="login" style={{ textDecoration: 'none' }} className="footer-menu">LOG IN</Link></p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6} className="mx-auto d-block">
                            <p style={{ width: '100%', color: '#FFFFFF', fontSize: '0.8em', }}>COPYRIGHT @ WESTERN PACIFIC BUILDERS 2020</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={12}>
                            <hr style={{ paddingLeft: '0px', width: '100%', color: '#8b8c8d', borderColor: '#8b8c8d' }} className="text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={12}>
                            <p className="text-justify" style={{ color: '#FFFFFF', fontSize: '0.6em', lineHeight: '20px', }}>
                            *A savings program is customized for your home, so pricing and savings vary based on location, consumption, production, government rebates and local utility rates. Savings on your total electricity costs is not guaranteed. Savings based on savings program proposals with 360 months of billing data. Savings rate calculated by subtracting savings program kWh rate from relevant utility kWh rate with a 3.9% annual increase. Savings on your total electricity costs is not guaranteed. Financing terms vary by location and are not available in all areas. $0 due upon contract signing. No security deposit required. CA CSLB 1053554. Western Pacific Builders, Inc.  is not the lender and only the third party lender may approve, offer, or make a loan. Environmental benefits based on data collected from: Environmental Protection Agency and Global ReLeaf.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        )
    }
}

const Footer = styled.footer`
background: rgba(12,39,54,1);
background: -moz-linear-gradient(top, rgba(12,39,54,1) 0%, rgba(12,39,54,1) 1%, rgba(9,22,31,1) 94%, rgba(9,22,31,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(12,39,54,1)), color-stop(1%, rgba(12,39,54,1)), color-stop(94%, rgba(9,22,31,1)), color-stop(100%, rgba(9,22,31,1)));
background: -webkit-linear-gradient(top, rgba(12,39,54,1) 0%, rgba(12,39,54,1) 1%, rgba(9,22,31,1) 94%, rgba(9,22,31,1) 100%);
background: -o-linear-gradient(top, rgba(12,39,54,1) 0%, rgba(12,39,54,1) 1%, rgba(9,22,31,1) 94%, rgba(9,22,31,1) 100%);
background: -ms-linear-gradient(top, rgba(12,39,54,1) 0%, rgba(12,39,54,1) 1%, rgba(9,22,31,1) 94%, rgba(9,22,31,1) 100%);
background: linear-gradient(to bottom, rgba(12,39,54,1) 0%, rgba(12,39,54,1) 1%, rgba(9,22,31,1) 94%, rgba(9,22,31,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0c2736', endColorstr='#09161f', GradientType=0 );
`;

const mapStateToProps = store => ({
    // logged: store.AppReducer.logged,
})

export default connect(mapStateToProps)(withRouter(NavbarPage));