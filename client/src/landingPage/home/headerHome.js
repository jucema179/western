import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Parallax, Background } from "react-parallax";
import './css/styles.css';
import { Image, Button, Col, Container, Row, Form } from 'react-bootstrap';

import Footer from '../globalComponents/footer';
import ContactForm from '../globalComponents/contactForm';
import ModalContactForm from '../globalComponents/modalContactForm';

class HeaderImage extends Component {
  state = {
    modalShow: false,
    setModalShow: false,
  }

  componentWillMount() {

  }

  setModalShow = (bool) => {
    this.setState({
      setModalShow: bool,
      modalShow: bool,
    })
  }

  render() {
    return (
      <div>
        <ModalContactForm
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage='assets/img/icons/home.jpg'
          strength={-100}
        >
          <div style={{ minHeight: '762px' }} />
          <p
            className="text-white"
            style={{
              textAlign: 'center',
              position: 'absolute',
              fontSize: '2em',
              top: '30%',
              left: 0,
              right: 0
            }}
          >
            LOWER YOUR COST TO POWER YOUR LIFE
              </p>
              <button
                onClick={() => this.setModalShow(true)}
                className="btn-style-dark-gray mx-auto d-block mb-5"
                variant="outline-secondary">GET A FREE ASSESSMENT
                </button>
          <div className="big_triangle_home"></div>
        </Parallax>
        <div
          style={{
            backgroundColor: '#0a0a0a',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Container className="mt-5 mb-5 div-padding"  >
            <h2 className="text-center mt-5 text-white" >WHY GET AN ENERGY ASSESSMENT?</h2>
            <Row className="mt-5">
              <Col xs={12} lg={4} className="mt-5">
                <Row>
                  <Image src="assets/img/icons/lightbulb.svg" width="100" height="100" rounded className="mx-auto d-block" />
                </Row>
                <Row>
                  <p className="mt-3 mb-3 mx-auto d-block text-center text-white">50,000 Energy Assessments<br />By our certified professionals.</p>
                </Row>
              </Col>
              <Col xs={12} lg={4} className="mt-5">
                <Row>
                  <Image src="assets/img/icons/earth.svg" width="100" height="100" rounded className="mx-auto d-block" />
                </Row>
                <Row>
                  <p className="mt-3 mb-3 mx-auto d-block text-center text-white">10 Billion Dollars<br />Generated in savings programs.</p>
                </Row>
              </Col>
              <Col xs={12} lg={4} className="mt-5">
                <Row>
                  <Image src="assets/img/icons/coin.svg" width="100" height="100" rounded className="mx-auto d-block" />
                </Row>
                <Row>
                  <p className="mt-3 mb-3 mx-auto d-block text-center text-white">Lower Your Bills<br />Every month by going green.</p>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5 mx-auto d-block text-center" >
              <Col xs={12} className="mb-5">
                <button
                  onClick={() => this.setModalShow(true)}
                  className="btn-style-light-gray mx-auto d-block mb-5"
                  variant="outline-secondary">GET A FREE ASSESSMENT
                  </button>
              </Col>
            </Row>
          </Container>
          <div className="big_triangle_home_p2"></div>
        </div>
        <div
          className="gray-gradient mt-5 mb-5"
        >
          <Container className="text-center mt-5 mb-5 div-padding">
            <Row>
              <Col xs={12} lg={4}>
                <Image src="assets/img/icons/battery-western.png" className="d-none d-lg-block align-middle" width="100%" height="auto" rounded />
              </Col>
              <Col xs={12} lg={8}>
                <h2 className="text-center mt-5">LOWER YOUR COST OF ELECTRICITY</h2>
                <Row>
                  <Col xs={5} lg={5}>
                    <hr style={{ height: '2px', color: '#A9A9A9' }} className="text-center mx-auto d-block" />
                  </Col>
                  <Col xs={2} lg={2}>
                    <hr style={{ height: '3px' }} className="text-center bg-primary mx-auto d-block" />
                  </Col>
                  <Col xs={5} lg={5}>
                    <hr style={{ height: '2px', color: '#A9A9A9' }} className="text-center mx-auto d-block" />
                  </Col>
                </Row>
                <h4 className="mt-5 mb-5" style={{ lineHeight: '36px', fontWeight: '300' }}>
                  Would you be willing to pay less for the same electricity you are currently using? Western Pacific Builder's programs are designed to be no out of pocket and lower your cost of power by reducing the kWh rate you pay for electricity. We work directly with your local utility provider to find the best program metered through the grid in order to do so.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="mb-5">
              <button
                onClick={() => this.setModalShow(true)}
                className="btn-style-dark-gray mx-auto d-block mb-5"
                variant="outline-secondary">GET A FREE ASSESSMENT
                </button>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="mt-5 mb-5 div-padding">
          <ContactForm />
        </Container>
        <Footer />
      </div>
    )
  }
}

export default HeaderImage;