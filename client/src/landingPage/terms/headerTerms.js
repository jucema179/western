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

class HeaderImage extends Component {
  componentWillMount() {

  }

  test = (e) => {
    e.preventDefault();
    alert('This is a modal')
  }

  render() {
    return (
      <div>
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
            style={{
              borderRadius: '0px',
              border: '2px solid #FFFFFF',
              outline: 'none',
              backgroundColor: '#FFFFFF',
              opacity: '0.6',
              borderColor: '#FFFFFF',
              height: '50px',
              padding: '10px',
              margin: 'auto',
              position: 'absolute',
              textAlign: 'center',
              left: 0,
              bottom: '30px',
              right: 0
            }}
            onClick={(e) => this.test(e)}
            variant="outline-secondary">GET A FREE ASSESSMENT</button>
          <div className="big_triangle_home"></div>
        </Parallax>
        <div
          style={{
            backgroundColor: '#0a0a0a',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Container className="text-center" style={{
            padding: '50px',
            marginTop: '50px',
            paddingLeft: '60px',
            paddingRight: '60px'
          }}>
            <h2 className="text-center" style={{ color: '#FFFFFF', marginBottom: '100px', }}>WHY GET AN ENERGY ASSESSMENT?</h2>
            <Row>
              <Col xs={12} lg={4}>
                <Image src="assets/img/icons/lightbulb.svg" width="100" height="100" rounded />
                <p style={{ marginTop: '10px', marginBottom: '25px', color: '#FFFFFF' }}>50,000 Energy Assessments<br />By our certified professionals.</p>
              </Col>
              <Col xs={12} lg={4}>
                <Image src="assets/img/icons/earth.svg" width="100" height="100" rounded />
                <p style={{ marginTop: '10px', marginBottom: '25px', color: '#FFFFFF' }}>10 Billion Dollars<br />Generated in savings programs.</p>
              </Col>
              <Col xs={12} lg={4}>
                <Image src="assets/img/icons/coin.svg" width="100" height="100" rounded />
                <p style={{ marginTop: '10px', marginBottom: '25px', color: '#FFFFFF' }}>Lower Your Bills<br />Every month by going green.</p>
              </Col>
            </Row>
            <Row style={{ marginTop: '75px' }}>
              <Col xs={12}>
                <button
                  style={{
                    borderRadius: '0px',
                    border: '2px solid #FFFFFF',
                    outline: 'none',
                    backgroundColor: '#151515',
                    opacity: '0.8',
                    borderColor: '#FFFFFF',
                    height: '50px',
                    padding: '10px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                  }}
                  onClick={(e) => this.test(e)}
                  variant="outline-secondary">GET A FREE ASSESSMENT</button>
              </Col>
            </Row>
          </Container>
          <div className="big_triangle_home_p2"></div>
        </div>
        <div
          style={{
            padding: '50px',
          }}
          className="gray-gradient"
        >
          <Container className="text-center" style={{ marginTop: '50px', paddingLeft: '100px', paddingRight: '100px' }}>
            <Row>
              <Col xs={12} lg={4}>
                <Image src="assets/img/icons/battery-western.png" style={{ verticalAlign: 'middle' }} className="d-none d-lg-block align-middle" width="100%" height="auto" rounded />
              </Col>
              <Col xs={12} lg={8}>
                <h2 className="text-center">LOWER YOUR COST OF ELECTRICITY</h2>
                <Row>
                  <Col xs={5} lg={5}>
                    <hr style={{ height: '2px', color: '#A9A9A9' }} className="text-center" />
                  </Col>
                  <Col xs={2} lg={2}>
                    <hr style={{ height: '3px' }} className="text-center bg-primary" />
                  </Col>
                  <Col xs={5} lg={5}>
                    <hr style={{ height: '2px', color: '#A9A9A9' }} className="text-center" />
                  </Col>
                </Row>
                <h4 style={{ marginTop: '10px', marginBottom: '25px', lineHeight: '36px', fontWeight: '300' }}>
                  Would you be willing to pay less for the same electricity you are currently using? Western Pacific Builder's programs are designed to be no out of pocket and lower your cost of power by reducing the kWh rate you pay for electricity. We work directly with your local utility provider to find the best program metered through the grid in order to do so.
                </h4>
              </Col>
            </Row>
            <Row style={{ marginTop: '75px' }}>
              <Col xs={12}>
                <button
                  style={{
                    borderRadius: '0px',
                    border: '2px solid #FFFFFF',
                    outline: 'none',
                    backgroundColor: '#151515',
                    opacity: '0.8',
                    borderColor: '#FFFFFF',
                    height: '50px',
                    padding: '10px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                  }}
                  onClick={(e) => this.test(e)}
                  variant="outline-secondary">GET A FREE ASSESSMENT</button>
              </Col>
            </Row>
          </Container>
        </div>
        <ContactForm/>
        <Footer/>
      </div>
    )
  }
}

export default HeaderImage;