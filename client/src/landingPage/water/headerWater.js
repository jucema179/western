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
          bgImage='assets/img/icons/water.jpg'
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
            WATER IS LIFE, USER IT WELL
              </p>
              <button
                onClick={() => this.setModalShow(true)}
                className="btn-style-light-gray mx-auto d-block mb-5"
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
          <Container className="text-center mt-5 mb-5 div-padding">
            <Row>
              <Col xs={12} lg={10} className="offset-lg-1">
                <h2 className="text-white">
                "Urban water use could be reduced by up to 80% if residents replaced lawns with drought-tolerant plants, fixed water leaks, and replaced old toilets with water-efficient technology."
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage='assets/img/icons/grass.jpg'
        >
          <div style={{ height: '100%', }} >
            <Row className="text-center mt-5 mb-5 div-padding">
              <Col xs={10} lg={10} className="offset-lg-1 offset-sm-1 offset-1">
                <Row>
                  <Col xs={12} sm={5} lg={5} className="offset-lg-6 offset-sm-6 offset-0" style={{paddingTop: '150px',  display: 'inline-block'}}>
                    <h2
                      style={{
                        paddingTop: '50px'
                      }}
                      className="text-center"
                    >SMART LAWN</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={5} lg={5} className="offset-lg-6 offset-sm-6 offset-0" style={{paddingTop: '10px', paddingBottom: '30px',   display: 'inline-block'}}>
                    <hr style={{ width: '30px', height: '2px' }} className="text-center bg-primary" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={5} lg={5} className="offset-lg-6 offset-sm-6 offset-0" style={{ paddingBottom: '150px',   display: 'inline-block'}}>
                      <p className="text-center" style={{ fontSize: '1.2em', fontWeight: '300' }}>It's not just about keeping your grass beautifully green all year round. With our products, enjoy a pesticide free environment and reap the full benefits of saving 70% of your water usage!</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={12} style={{marginTop: '50px', marginBottom: '50px'}}>
              <Row className="mt-5 mx-auto d-block text-center" >
              <Col xs={12}>
                <button
                  onClick={() => this.setModalShow(true)}
                  className="btn-style-light-gray mx-auto d-block"
                  variant="outline-secondary">GET A FREE ASSESSMENT</button>
              </Col>
            </Row>
              </Col>
            </Row>
          </div>
        </Parallax>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage='assets/img/icons/shower.png'
        >
          <div style={{ height: '100%', }} className="text-center mt-5 mb-5 div-padding">
            <Row className="text-center mt-5 mb-5 div-padding">
              <Col xs={10} lg={10} className="offset-lg-1 offset-sm-1 offset-1">
                <Row>
                  <Col xs={12} sm={5} lg={5} className="offset-lg-1 offset-sm-1 offset-0" style={{ display: 'inline-block'}}>
                    <h2
                      className="text-center"
                    >HIGH FLOW, NO DRIP
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={5} lg={5} className="offset-lg-1 offset-sm-1 offset-0" style={{paddingTop: '10px', paddingBottom: '30px',   display: 'inline-block'}}>
                    <hr style={{ width: '30px', height: '2px' }} className="text-center bg-primary" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={5} lg={5} className="offset-lg-1 offset-sm-1 offset-0" style={{ paddingBottom: '150px',   display: 'inline-block'}}>
                      <p className="text-center" style={{ fontSize: '1.2em', fontWeight: '300' }}>A program that will pay for itself in water savings has become a very popular conservation tool. It allows excellent water savings potential without sacrificing performance.</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={12} >
              <Row className="mt-5  mx-auto d-block text-center" >
                <Col xs={12}>
                  <button
                    onClick={() => this.setModalShow(true)}
                    className="btn-style-dark-gray mx-auto d-block"
                    variant="outline-secondary">GET A FREE ASSESSMENT</button>
                </Col>
              </Row>
              </Col>
            </Row>
          </div>
        </Parallax>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage='assets/img/icons/raindrops.jpg'
        >
          <div style={{ 
            height: '100%', 
            backgroundColor: 'rgba(255,255,255,0.9)',
            '-webkit-box-shadow': '0px 0px 115px 100px #FFFFFF inset',
            '-moz-box-shadow':'0px 0px 115px 100px #FFFFFF inset',
            'box-shadow':'0px 0px 115px 100px #FFFFFF inset', paddingTop: '60px' }} >
            <Row>
              <Col xs={10} lg={10} className="offset-lg-1 offset-sm-1 offset-1">
                <Row>
                  <Col xs={12} sm={12} lg={5} className="text-center offset-lg-1" style={{marginTop: '20px', display: 'inline-block', backgroundClip: 'padding-box'}}>
                      <Row>
                        <p className="font-italic" style={{paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px', fontSize: '1.2em', fontWeight: '300', paddingBottom: '15px' }}>“Met with Artem M. of Western Pacific Builders and was very impressed with his professionalism, courteousness and knowledge of how we can save on our electric bill. He was quite thorough and we got quite an education on SCE and how Western Pacific Builders and the programs it represents can be of major help. It all made sense to us and we are pursuing it to see if the outcome will be!</p>
                      </Row>
                      <Row style={{position: 'relative', marginTop: '-20px', backgroundClip: 'padding-box'}}>
                        <Col xs={4} lg={4}>
                          <Image src="assets/img/icons/comment-7.jpeg" style={{ width: '110px', height: '110px', overflow: 'hidden', objectFit: 'cover' }} width="320" height="213" roundedCircle ></Image>
                        </Col>
                        <Col xs={8} lg={8}>
                          <Row>
                            <h5 style={{textAlign: 'left', fontWeight: '600',  color: '#000000', marginTop: '20px',}}>
                              MARY LOU R
                            </h5>
                          </Row>
                          <Row >
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)',}}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                          </Row>
                        </Col>
                      </Row>
                  </Col>
                  <Col xs={12} sm={12} lg={5} className="text-center offset-lg-1" style={{marginTop: '20px', display: 'inline-block', backgroundClip: 'padding-box'}}>                      
                      <Row >
                        <p className="font-italic" style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px', fontSize: '1.2em', fontWeight: '300', paddingBottom: '15px'  }}>I literally love this company. Western Pacific Builders stopped by my house to do an energy analysis. I was uncertain how or if they could help as my bills have been $300+. I also knew I didn't want solar which they agreed to work around. Good news is they have different utility energy programs that guide homeowners in the right direction unlike most "solar" companies.</p>
                      </Row>
                      <Row style={{position: 'relative', marginTop: '-20px', backgroundClip: 'padding-box'}}>
                        <Col xs={4} lg={4}>
                          <Image src="assets/img/icons/comment-8.jpeg" style={{ width: '110px', height: '110px', overflow: 'hidden', objectFit: 'cover' }} width="1456" height="1920" roundedCircle ></Image>
                        </Col>
                        <Col xs={8} lg={8}>
                          <Row>
                            <h5 style={{textAlign: 'left', fontWeight: '600',  color: '#000000', marginTop: '20px',}}>
                              PHOEBE PETERSON
                            </h5>
                          </Row>
                          <Row >
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)',}}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                          </Row>
                        </Col>
                      </Row>  
                  </Col>
                  <Col xs={12} sm={12} lg={11} className="text-center offset-lg-1" style={{marginTop: '20px', marginBottom: '25px', display: 'inline-block', backgroundClip: 'padding-box'}}>
                      <Row>
                        <p className="font-italic" style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px', fontSize: '1.2em', fontWeight: '300', paddingBottom: '15px'  }}>Just had energy assessment with the Western Pacific Builders team where I was presented with a number of discount programs to help lower my energy bill. The rep was incredibly knowledgeable and answered every question we could think of. I am responsible for the electric bills and my husband had no idea we were paying that much every month.</p>
                      </Row>
                      <Row style={{position: 'relative', marginTop: '-20px', backgroundClip: 'padding-box'}}>
                        <Col xs={4} lg={4}>
                          <Image src="assets/img/icons/comment-9.jpeg" style={{ width: '110px', height: '110px', overflow: 'hidden', objectFit: 'cover' ,}} width="427" height="375" roundedCircle ></Image>
                        </Col>
                        <Col xs={8} lg={8}>
                          <Row>
                            <h5 style={{textAlign: 'left', fontWeight: '600',  color: '#000000', marginTop: '20px',}}>
                              YALIM ANDIZ
                            </h5>
                          </Row>
                          <Row >
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)',}}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                            <TiStar  style={{color: 'rgba(1, 1, 1, 0.3)', }}/>
                          </Row>
                        </Col>
                      </Row>  
                  
                  </Col>
                </Row>
                <Row className="mt-5 mb-5 mx-auto d-block text-center" >
                  <Col xs={12}>
                    <button
                      onClick={() => this.setModalShow(true)}
                      className="btn-style-dark-gray mx-auto d-block"
                      variant="outline-secondary">GET A FREE ASSESSMENT</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Parallax>
        <Container className="mt-5 mb-5 div-padding">
          <ContactForm />
        </Container>        
        <Footer/>
      </div>
    )
  }
}

export default HeaderImage;