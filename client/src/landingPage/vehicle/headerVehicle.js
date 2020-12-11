import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";
import './css/styles.css';
import { Image, Button, Col, Container, Row, Carousel } from 'react-bootstrap';
import { TiStar } from 'react-icons/ti';
import postscribe from 'postscribe';

import Footer from '../globalComponents/footer';
import ContactForm from '../globalComponents/contactForm';
import ModalContactForm from '../globalComponents/modalContactForm';

class HeaderImage extends Component {
  state = {
    modalShow: false,
    setModalShow: false,
  }

  componentDidMount() {
    postscribe("#charger-stations-us", '<div id="afdc-stations"><div id="afdc-stations-loading">Loading alternative fueling station locator...</div></div><script type="text/javascript">window.afdcStationsOptions = {"country":"all","localeCountry":"US","path":"/find/nearest","query":{}}</script><script async defer src="https://widgets.nrel.gov/afdc/station-locator/assets/embed.js"></script><noscript>Please enable JavaScript to view the alternative fueling station locator.</noscript>')

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
          bgImage='assets/img/icons/vehicle.jpg'
          strength={-100}
        >
          <div style={{ minHeight: '762px' }} />
          <p
            // className="text-white"
            style={{
              textAlign: 'center',
              position: 'absolute',
              fontSize: '2em',
              top: '30%',
              left: 0,
              right: 0
            }}
          >
            CHARGE YOUR LIFE ANYWHERE
              </p>
              <button
                onClick={() => this.setModalShow(true)}
                className="btn-style-light-gray mx-auto d-block mb-5"
                variant="outline-secondary">GET A FREE ASSESSMENT
                </button>
          <div className="big_triangle"></div>
        </Parallax>
        <div
        >
          <Container className="text-center mt-5 mb-5 div-padding">
            <Row>
              <Col xs={12} lg={4}>
                <Image src="assets/img/icons/GS-Charger.png" style={{ verticalAlign: 'middle' }} className="d-none d-lg-block align-middle" width="100%" height="auto" rounded />
              </Col>
              <Col xs={12} lg={8}>
                <h2 className="text-center mt-5">WESTERN PACIFIC BUILDERS HOME CHARGING STATION</h2>
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
                <h4 style={{ marginTop: '30px', marginBottom: '25px', lineHeight: '36px', fontWeight: '300' }}>
                Every electric car comes with adaptors to plug into common outlets. It's time to provide more range in less time at the center of your world, your home.                </h4>
              </Col>
            </Row>
            <Row className="mt-5 mx-auto d-block text-center" >
              <Col xs={12}>
                <button
                  onClick={() => this.setModalShow(true)}
                  className="btn-style-dark-gray mx-auto d-block"
                  variant="outline-secondary">GET A FREE ASSESSMENT</button>
              </Col>
            </Row>
          </Container>
        </div>

        <div  
          className="gray-gradient-inclined-vertical mt-5 mb-5 div-padding"
          >
            <Container>
                <Row>
                  <Col xs={12} lg={12}>
                    <h2 className="text-center text-white" style={{ marginTop: '30px',}}>CHARGING STATIONS ACROSS THE WORLD</h2>
                    <Row>
                      <Col xs={5} lg={5}>
                        <hr style={{ height: '0.1px', background: '#FFFFFF' }} className="text-center" />
                      </Col>
                      <Col xs={2} lg={2}>
                        <hr style={{ height: '3px' }} className="text-center bg-primary" />
                      </Col>
                      <Col xs={5} lg={5}>
                        <hr style={{ height: '0.1px', background: '#FFFFFF' }} className="text-center" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={10} className="offset-lg-1" style={{ marginTop: '25px'}}> 
                    <div id="charger-stations-us">

                    </div>
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