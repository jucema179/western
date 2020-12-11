import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";
import './css/styles.css';
import { Image, Button, Col, Container, Row } from 'react-bootstrap';
import { TiStar } from 'react-icons/ti';

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
          bgImage='assets/img/icons/energy.jpg'
          strength={-100}
        >
          <div style={{ minHeight: '762px' }} />
          <p
            style={{
              textAlign: 'center',
              position: 'absolute',
              fontSize: '2em',
              top: '30%',
              left: 0,
              right: 0
            }}
          >
            TAKE CONTROL OF YOUR ENERGY COSTS
              </p>
          <button
            onClick={() => this.setModalShow(true)}
            className="btn-style-light-gray mx-auto d-block mb-5"
            variant="outline-secondary">GET A FREE ASSESSMENT
                </button>
          <div className="big_triangle"></div>
        </Parallax>
        <div
          className="gray-gradient"
        >
          <Container className="mt-5 mb-5 div-padding">
            <Row>
              <h2 className="text-center mx-auto d-block">HOW IT WORKS</h2>
            </Row>
            <Row>
              <hr className="text-center bg-primary w30 h-25 mx-auto d-block" />
            </Row>
            <Row className="mt-5">
              <Col xs={12} lg={4}>
                <Row>
                  <Image src="assets/img/icons/plug.svg" width="100" height="100" rounded className="mx-auto d-block" />
                </Row>
                <Row>
                  <h5 className="mt-5 mx-auto d-block">REDUCTION</h5>
                </Row>
                <Row>
                  <p className="mt-1 mb-5 mx-auto d-block text-center p-2">Lower your kWh usage and start living a sustainable lifestyle.</p>
                </Row>
              </Col>
              <Col xs={12} lg={4}>
                <Row>
                  <Image src="assets/img/icons/lightning.svg" width="100" height="100" rounded className="mx-auto d-block" />
                </Row>
                <Row>
                  <h5 className="mt-5 mx-auto d-block">PRODUCTION</h5>
                </Row>
                <Row>
                  <p className="mt-1 mb-5 text-center p-2">Take control and lower your energy bill with no money out of pocket.</p>
                </Row>
              </Col>
              <Col xs={12} lg={4}>
                <Row>
                  <Image src="assets/img/icons/battery-charge.svg" width="100" height="100" rounded className="mx-auto d-block" />
                </Row>
                <Row>
                  <h5 className="mt-5 mx-auto d-block">STORAGE</h5>
                </Row>
                <Row>
                  <p className="mt-1 mb-5 text-center p-2" >Keep your home safe and powered throughout any outage.</p>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div
        >
          <Container className="mt-5 mb-5 div-padding">
            <Row>
              <h2 className="text-center mx-auto d-block">4 SIMPLE STEPS</h2>
            </Row>
            <Row>
              <hr className="text-center mx-auto d-block bg-primary w30 h-25" />
            </Row>
            <Row className="mt-5">
              <Col xs={12} lg={3}>
                <Row>                
                  <Image src="assets/img/icons/one.png" className="mx-auto d-block" width="100" height="100" rounded />
                </Row>
                <Row>                
                  <h5 className="mt-3 mx-auto d-block">Assessment</h5>
                </Row>
                <Row>                
                  <p className="text-center mt-1 mb-2 linheight30 p-2">See how much electricity you use and what rate you pay.</p>
                </Row>

              </Col>
              <Col xs={12} lg={3}>
                <Row>                
                  <Image src="assets/img/icons/two.png" className="mx-auto d-block" width="100" height="100" rounded />
                </Row>
                <Row>
                  <h5 className="mt-3 mx-auto d-block">Enroll</h5>
                </Row>
                <Row>
                  <p className="text-center mt-1 mb-2 linheight30 p-2">Program applications designed to lower your cost of electricity.</p>
                </Row>
              </Col>
              <Col xs={12} lg={3}>
                <Row>                
                  <Image src="assets/img/icons/three.png" className="mx-auto d-block" width="100" height="100" rounded />
                </Row>
                <Row>                
                  <h5 className="mt-3 mx-auto d-block">Delivery & Setup</h5>
                </Row>
                <Row>                
                  <p className="text-center mt-1 mb-2 linheight30 p-2">We offer convenient delivery and expert setup of your new savings program.</p>
                </Row>
              </Col>
              <Col xs={12} lg={3}>
                <Row>                
                  <Image src="assets/img/icons/four.png" className="mx-auto d-block" width="100" height="100" rounded />
                </Row>
                <Row>                
                  <h5 className="mt-3 mx-auto d-block">Activate</h5>
                </Row>
                <Row>                
                  <p className="text-center mt-1 mb-2 linheight30 p-2">You now enter a new world of lower electrical costs and great service.</p>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5 mx-auto d-block text-center" >
              <Col xs={12}>
                <button
                  onClick={() => this.setModalShow(true)}
                  className="btn-style-dark-gray mx-auto d-block mb-5"
                  variant="outline-secondary">GET A FREE ASSESSMENT</button>
              </Col>
            </Row>
          </Container>
        </div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage='assets/img/icons/bg-energy-family.jpg'
          strength={-100}
        >
          <div style={{ height: 'auto', background: 'rgba(0, 0, 0, 0.6)' }} className="div-padding" >
            <h4
              className="text-center text-white"
            >WHY WESTERN PACIFIC BUILDERS</h4>
            <hr className="text-center bg-primary w30  h-25 mx-auto d-block" />
            <Row>
              <Col xs={10} lg={10} className="offset-lg-1 offset-sm-1 offset-1">
                <Row>
                  <Col xs={12} lg={6} className="text-center mt-5 mb-5" >
                      <p className="f-w-s1-we300 mt-5">We customize every program to benefit you.</p>
                      <p className="f-w-s1-we300 mt-5">We lower your cost of living in a sustainable way.</p>
                      <p className="f-w-s1-we300 mt-5">We have helped tens of thousands of homeowners.</p>
                      <p className="f-w-s1-we300 mt-5">We handle everything from start to finish with lifetime support.</p>
                  </Col>
                  <Col xs={12} lg={6} className="text-center mt-5 mb-5" >
                      <p className="f-w-s1-we300 mt-5">We offer nationwide service.</p>
                      <p className="f-w-s1-we300 mt-5">We care about your home like it's our own.</p>
                      <p className="f-w-s1-we300 mt-5">Our customers love us.</p>
                      <p className="f-w-s1-we300 mt-5">We guarantee our programs for the lifetime of your savings.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Parallax>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage='assets/img/icons/bg-energy-family2.jpg'
          strength={-100}
        >
          <div style={{ height: 'auto', background: 'rgba(0, 0, 0, 0.6)' }} className="div-padding" >
            <h2
              className="text-center text-white"
            >OUR CUSTOMERS TRUST US</h2>
            <hr className="text-center bg-primary w30 h-25 mx-auto d-block" />
            <Row>
              <Col xs={10} lg={10} className="offset-lg-1 offset-sm-1 offset-1">
                <Row>
                  <Col xs={12} sm={12} lg={5} className="text-center offset-lg-1" style={{ marginTop: '20px', display: 'inline-block', backgroundClip: 'padding-box' }}>
                    <Row style={{ background: 'rgba(1, 1, 1, 0.3)' }}>
                      <p className="font-italic text-white" style={{  padding: '50px', fontSize: '1.2em', fontWeight: '300', paddingBottom: '-20px' }}>Just got a visit today by Lanon Johnson from Western Pacific Builders. They explained to us in detail about our electricity bill...my husband and myself never knew the breakups in our bill. He did a fantastic job explaining us everything. He also explained us all the options for how to minimize our bill and answered all our questions we had. We were very happy with all the information he provided us with.</p>
                    </Row>
                    <Row style={{ position: 'relative', marginTop: '-20px', backgroundClip: 'padding-box' }}>
                      <Col xs={4} lg={4}>
                        <Image src="assets/img/icons/comment-1.jpeg" style={{ width: '110px', height: '110px', overflow: 'hidden', objectFit: 'cover', border: '5px solid rgba(255, 255, 255, 0.2)' }} width="320" height="214" roundedCircle ></Image>
                      </Col>
                      <Col xs={8} lg={8}>
                        <Row>
                          <h5 style={{ textAlign: 'left', fontWeight: '600', marginTop: '30px', color: '#000000', }}>
                            KHYATI MONTROSE
                            </h5>
                        </Row>
                        <Row >
                          <TiStar className="text-white"/>
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} lg={5} className="text-center offset-lg-1" style={{ marginTop: '20px', display: 'inline-block', backgroundClip: 'padding-box' }}>
                    <Row style={{ background: 'rgba(1, 1, 1, 0.3)' }}>
                      <p className="font-italic" style={{ color: '#FFFFFF', padding: '50px', fontSize: '1.2em', fontWeight: '300', paddingBottom: '-20px' }}>My parents have been beaming about Bronson Geraldo from Western Pacific Builders. They had been considering solar for quite some time and finally decided to go solar after meeting with Bronson. He was extremely thorough and took his time explaining how they could save significant money in their electric utility bills for the next 20 years. They have dealt with many other representatives and sales people and had a hard time understanding what they were saying or why it would be beneficial to them. I was there when Bronson met my parents for the first time and can vouch for him!</p>
                    </Row>
                    <Row style={{ position: 'relative', marginTop: '-20px', backgroundClip: 'padding-box' }}>
                      <Col xs={4} lg={4}>
                        <Image src="assets/img/icons/comment-2.jpg" style={{ width: '110px', height: '110px', overflow: 'hidden', objectFit: 'cover', border: '5px solid rgba(255, 255, 255, 0.2)' }} width="427" height="375" roundedCircle ></Image>
                      </Col>
                      <Col xs={8} lg={8}>
                        <Row>
                          <h5 style={{ textAlign: 'left', fontWeight: '600', color: '#000000', marginTop: '30px', }}>
                            SERRY PETERS
                            </h5>
                        </Row>
                        <Row >
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} lg={11} className="text-center offset-lg-1" style={{ marginTop: '20px', marginBottom: '25px', display: 'inline-block', backgroundClip: 'padding-box' }}>
                    <Row style={{ background: 'rgba(1, 1, 1, 0.3)' }}>
                      <p className="font-italic" style={{ color: '#FFFFFF', padding: '50px', fontSize: '1.2em', fontWeight: '300', paddingBottom: '-20px' }}>Western Pacific Builders helped me so much working with LADWP which is a slow many step process. Remy Levine was very responsive in the permit area and I can't say enough good words about Jayson Williams who helped me get the correct paperwork with LADWP for the incentives. In my opinion Jayson went above and beyond to get this finished. I am very happy with this company and their assistance to me. I would have never have been able to do it without them.</p>
                    </Row>
                    <Row style={{ position: 'relative', marginTop: '-20px', backgroundClip: 'padding-box' }}>
                      <Col xs={4} lg={4}>
                        <Image src="assets/img/icons/comment-3.jpeg" style={{ width: '110px', height: '110px', overflow: 'hidden', objectFit: 'cover', border: '5px solid rgba(255, 255, 255, 0.2)' }} width="427" height="375" roundedCircle ></Image>
                      </Col>
                      <Col xs={8} lg={8}>
                        <Row>
                          <h5 style={{ textAlign: 'left', fontWeight: '600', color: '#000000', marginTop: '30px', }}>
                            SERRY PETERS
                            </h5>
                        </Row>
                        <Row >
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                          <TiStar className="text-white" />
                        </Row>
                      </Col>
                    </Row>

                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Parallax>
        <Container className="mt-5 mb-5 div-padding">
          <ContactForm />
        </Container>    
        <Footer />
      </div>
    )
  }
}

const WrapBgFamily = styled.div`
  height: 'auto'; 
  background: 'rgba(0, 0, 0, 0.6)';
`;


export default HeaderImage;