import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import './css/styles.css';
import { Image, Col, Container, Row, Carousel } from 'react-bootstrap';
import { TiStar } from 'react-icons/ti';

import Footer from '../globalComponents/footer';
import ContactForm from '../globalComponents/contactForm';
import ModalContactForm from '../globalComponents/modalContactForm';

class HeaderImage extends Component {
  state = {
    modalShow: false,
    setModalShow: false,
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
          bgImage='assets/img/icons/smartHome.jpg'
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
            YOU ARE SMART, YOUR HOME SHOULD BE TOO
              </p>
              <button
            onClick={() => this.setModalShow(true)}
            className="btn-style-dark-gray mx-auto d-block mb-5"
            variant="outline-secondary">GET A FREE ASSESSMENT
                </button>
          <div className="big_triangle"></div>
        </Parallax>
        <div
        >
          <Container className="text-center mt-5 mb-5 div-padding">
            <Row>
              <h2 className="text-center  mx-auto d-block">MEET WESTERN PACIFIC BUILDERS SMART HOME</h2>
            </Row>
            <Row>
              <hr style={{ width: '30px', height: '2px' }} className="text-center  mx-auto d-block bg-primary" />
            </Row>
            <Row>
              <h5 className="text-center " style={{ fontWeight: '300' }}>
                With Western Pacific Builders Smart Home you can control and optimize almost any smart devices made today, all from one app, from anywhere in the world. Western Pacific Builders Home Automation App learns your home’s routines and makes subtle adjustments to save you energy and money, all while giving you Universal Control of your things.
              </h5>
            </Row>

            <Row className="mt-5">
              <Col xs={5} lg={4} className="offset-1 offset-lg-0 d-none d-lg-block">
                <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Image src="assets/img/icons/smart-home.svg" style={{ verticalAlign: 'middle', textAlign: 'center' }} className="align-middle" width="60" height="60" rounded />
                  <p style={{ marginTop: '20px', paddingLeft: '15px', fontWeight: '300' }}>Universal Automation</p>
                </Row>
              </Col>
              <Col xs={5} lg={4} className="d-none d-lg-block">
                <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Image src="assets/img/icons/smart-home-money.svg" style={{ verticalAlign: 'middle', textAlign: 'center' }} className="align-middle" width="60" height="60" rounded />
                  <p style={{ marginTop: '20px', paddingLeft: '15px', fontWeight: '300', }}>Real Energy Savings</p>
                </Row>
              </Col>
              <Col xs={5} lg={4} className="offset-1 offset-lg-0 d-none d-lg-block">
                <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Image src="assets/img/icons/security.svg" style={{ verticalAlign: 'middle', textAlign: 'center' }} className="align-middle" width="60" height="60" rounded />
                  <p style={{ marginTop: '20px', paddingLeft: '15px', fontWeight: '300' }}>Personalized Security</p>
                </Row>
              </Col>
              <Col xs={5} lg={4} className="d-none d-lg-block">
                <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Image src="assets/img/icons/analytics.svg" style={{ verticalAlign: 'middle', textAlign: 'center' }} className="align-middle" width="60" height="60" rounded />
                  <p style={{ marginTop: '20px', paddingLeft: '15px', fontWeight: '300', }}>Energy Monitoring & Alerts</p>
                </Row>
              </Col>
              <Col xs={5} lg={4} className="offset-1 offset-lg-0 d-none d-lg-block">
                <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Image src="assets/img/icons/solar-panel.svg" style={{ verticalAlign: 'middle', textAlign: 'center' }} className="align-middle" width="60" height="60" rounded />
                  <p style={{ marginTop: '20px', paddingLeft: '15px', fontWeight: '300' }}>Solar Monitoring & Alerts</p>
                </Row>
              </Col>
              <Col xs={5} lg={4} className="d-none d-lg-block">
                <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Image src="assets/img/icons/maintenance.svg" style={{ verticalAlign: 'middle', textAlign: 'center' }} className="align-middle" width="60" height="60" rounded />
                  <p style={{ marginTop: '20px', paddingLeft: '15px', fontWeight: '300', }}>Maintenance Alerts</p>
                </Row>
              </Col>
              <Col xs={5} lg={4} className="offset-1 offset-lg-0 d-none d-lg-block">
                <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Image src="assets/img/icons/security-camera.svg" style={{ verticalAlign: 'middle', textAlign: 'center' }} className="align-middle" width="60" height="60" rounded />
                  <p style={{ marginTop: '20px', paddingLeft: '15px', fontWeight: '300' }}>Video Camera Recording</p>
                </Row>
              </Col>
              <Col xs={5} lg={4} className="d-none d-lg-block">
                <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Image src="assets/img/icons/climatization.svg" style={{ verticalAlign: 'middle', textAlign: 'center' }} className="align-middle" width="60" height="60" rounded />
                  <p style={{ marginTop: '20px', paddingLeft: '15px', fontWeight: '300', }}>Smart HVAC Control</p>
                </Row>
              </Col>
              <Col xs={5} lg={4} className="offset-4 offset-lg-0 d-none d-lg-block">
                <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Image src="assets/img/icons/door-access.svg" style={{ verticalAlign: 'middle', textAlign: 'center' }} className="align-middle" width="60" height="60" rounded />
                  <p style={{ marginTop: '20px', paddingLeft: '15px', fontWeight: '300' }}>Digikey Door Access</p>
                </Row>
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
        
        <Container className="m-0 p-0" fluid>
          <Row noGutters>
            <Col xs={12} md={4} lg={4}>
              <Parallax
                bgImage='assets/img/icons/eco-control.jpg'
                strength={-100}
              >
                <div style={{ height: 'auto',  }} >
                  <Row style={{ margin: '20px', padding: '50px', background: 'rgba(0, 0, 0, 0.1)' }}>
                    <h2
                      style={{
                        wordBreak: 'break-word'
                      }}
                      className="text-center mx-auto d-block text-white p-3"
                    >Universal Controller</h2>
                    <p className="text-center text-white">
                    Western Pacific Builders Smart Home connects to all the popular smart devices, so you can update your hub without having to update all your sensors.                    
                    </p>
                  </Row>
                </div>
              </Parallax>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Parallax
                bgImage='assets/img/icons/eco-play.jpg'
                strength={-100}
              >
                <div style={{ height: 'auto',  }} >
                  <Row style={{ margin: '20px', padding: '50px', background: 'rgba(0, 0, 0, 0.1)' }}>
                    <h2
                      style={{
                        wordBreak: 'break-word'
                      }}
                        className="text-center mx-auto d-block text-white p-3"
                      >Preventative Maintenance</h2>
                    <p className="text-center text-white">
                      Be informed when your appliances need attention. Even know when filters needs changing, motors need servicing, or even when vents get clogged up.
                    </p>
                  </Row>
                </div>
              </Parallax>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Parallax
                bgImage='assets/img/icons/eco-safe.jpg'
                strength={-100}
              >
                <div style={{ height: 'auto',  }} >
                  <Row style={{ margin: '20px', padding: '50px', background: 'rgba(0, 0, 0, 0.1)' }}>
                    <h2
                      style={{
                        wordBreak: 'break-word'
                      }}
                      className="text-center mx-auto d-block text-white p-3"
                    >Family Protection</h2>
                    <p className="text-center text-white">
                      Receive emergency alerts and visual confirmation of your loved ones activity in the home using motion sensors.
                    </p>
                  </Row>
                </div>
              </Parallax>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Parallax
                bgImage='assets/img/icons/eco-BYOA.jpg'
                strength={-100}
              >
                <div style={{ height: 'auto', 
                paddingTop: '25%',
                paddingRight: '10%',
                paddingBottom: '21%',
                paddingLeft: '10%', 
              
              }} >
                  <Row style={{ margin: '20px', padding: '25px', background: 'rgba(0, 0, 0, 0.1)' }}>
                    <h2
                      style={{
                        wordBreak: 'break-word'
                      }}
                      className="text-center mx-auto d-block text-white p-3"
                    >Unlimited Possibilities</h2>
                    <p className="text-center text-white">
                    Build Your Own Automations on the fly, right from your phone. Send a Digital Key to your home. Watch live video as soon as motion occurs. Its your home, so you should be able to simply make it perform around your lifestyle.
                    </p>
                  </Row>
                </div>
              </Parallax>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Parallax
                bgImage='assets/img/icons/eco-home.jpg'
                strength={-100}
              >
                <div style={{ height: 'auto',
                paddingTop: '25%',
                paddingRight: '10%',
                paddingBottom: '21%',
                paddingLeft: '10%', 
               }} >
                  <Row style={{ margin: '20px', padding: '25px', background: 'rgba(0, 0, 0, 0.1)' }}>
                    <h2
                      style={{ 
                        wordBreak: 'break-word'
                      }}
                      className="text-center mx-auto d-block text-white p-3"
                    >Real Energy Savings</h2>
                    <p className="text-center text-white">
                    Western Pacific Builders Smart Home not only suggests brilliant opportunities for energy savings, but Western Pacific Builders Smart Home can take action with its Universal Home Automation control features! If no one is home, why keep the lights on? You have better things to think about, so sit back and let Western Pacific Builders Smart Home take care of all the details for you.
                    </p>
                  </Row>
                </div>
              </Parallax>
            </Col>
          </Row>
        </Container>
        <Container className="m-0 p-0" fluid>
          <Row noGutters>
            <Carousel style={{width: '100%'}}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{
                    height: 'fit-content',
                    objectFit: 'cover'
                  }}
                  src="assets/img/icons/eco_wake-1024x512.jpg"
                  alt="First slide"
                />
                <Carousel.Caption 
                  style={{
                    margin: 0,
                    top: '40%',
                    msTransform: 'translateY(-40%)',
                    transform: 'translateY(-40%)',
                  }}
                >
                  <Container>
                    <Row>
                      <Col lg={12} >
                        <h2 style={{fontWeight: '600'}}>Rise and Shine</h2>
                      </Col>
                      <Col lg={12}>
                        <p>
                          You deserve to wake up on the right side of the bed.  So go ahead and let the Western Pacific Builders Smart Home wake you up to a slowly litroom with the fresh aroma of coffee brewing, and the right tunes to get your day started. 
                        </p>
                      </Col>
                      <Col lg={12}>
                        <img
                          className="d-block w-100"
                          style={{
                            height: 'auto',
                            objectFit: 'cover',
                            paddingRight: '15%',
                            paddingLeft: '15%'
                          }}
                          src="assets/img/icons/Automations-Rise-1.png"
                        >
                        </img>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{
                    height: 'fit-content',
                    objectFit: 'cover'
                  }}
                  src="assets/img/icons/eco_cooking-1024x512.jpg"
                  alt="First slide"
                />
                <Carousel.Caption 
                  style={{
                    margin: 0,
                    top: '40%',
                    msTransform: 'translateY(-40%)',
                    transform: 'translateY(-40%)',
                  }}
                >
                  <Container>
                    <Row>
                      <Col lg={12} >
                        <h2 style={{fontWeight: '600'}}>Eco Mode</h2>
                      </Col>
                      <Col lg={12}>
                        <p>
                        Put your Western Pacific Builders Smart Home to work and see the earning potential that comes with just making a few simple, subtle, smart choices.  Your lights, thermostat, and appliances adjust to your lifestyle and put money in your pocket every month.  
                        </p>
                      </Col>
                      <Col lg={12}>
                        <img
                          className="d-block w-100"
                          style={{
                            height: 'auto',
                            objectFit: 'cover',
                            paddingRight: '15%',
                            paddingLeft: '15%'
                          }}
                          src="assets/img/icons/automations_savings_2.png"
                        >
                        </img>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{
                    height: 'fit-content',
                    objectFit: 'cover'
                  }}
                  src="assets/img/icons/eco_school-1024x512.jpg"
                  alt="First slide"
                />
                <Carousel.Caption 
                  style={{
                    margin: 0,
                    top: '40%',
                    msTransform: 'translateY(-40%)',
                    transform: 'translateY(-40%)',
                  }}
                >
                  <Container>
                    <Row>
                      <Col lg={12} >
                        <h2 style={{fontWeight: '600'}}>Family Care</h2>
                      </Col>
                      <Col lg={12}>
                        <p>
                        Keep an eye on your loved ones from anywhere in the world.  Western Pacific Builders Smart home will let you know if your kids stray from their route home or will allow you to peak in and watch them playing in the living room.                         
                        </p>
                      </Col>
                      <Col lg={12}>
                        <img
                          className="d-block w-100"
                          style={{
                            height: 'auto',
                            objectFit: 'cover',
                            paddingRight: '15%',
                            paddingLeft: '15%'
                          }}
                          src="assets/img/icons/Automations-Family-1.png"
                        >
                        </img>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{
                    height: 'fit-content',
                    objectFit: 'cover'
                  }}
                  src="assets/img/icons/eco_door-1024x512.jpg"
                  alt="First slide"
                />
                <Carousel.Caption 
                  style={{
                    margin: 0,
                    top: '40%',
                    msTransform: 'translateY(-40%)',
                    transform: 'translateY(-40%)',
                  }}
                >
                  <Container>
                    <Row>
                      <Col lg={12} >
                        <h2 style={{fontWeight: '600'}}>Home Security</h2>
                      </Col>
                      <Col lg={12}>
                        <p>
                        Leave your home with the peace of mind that Western Pacific Builders Smart Home is watching over things for you and if anything out  of the ordinary occurs, you and your securiy monitoring company will both get notified immediately. 
                        </p>                     
                      </Col>
                      <Col lg={12}>
                        <img
                          className="d-block w-100"
                          style={{
                            height: 'auto',
                            objectFit: 'cover',
                            paddingRight: '15%',
                            paddingLeft: '15%'
                          }}
                          src="assets/img/icons/Automations-Security-1.png"
                        >
                        </img>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
        <Container className="text-center mt-5 mb-5 div-padding">
            <Row>
              <Col xs={10} lg={10} className="offset-lg-1 offset-sm-1 offset-1">
                <Row>
                  <Col xs={12} sm={12} lg={5} className="text-center offset-lg-1" style={{ display: 'inline-block', backgroundClip: 'padding-box'}}>
                      <Row>
                        <p className="font-italic" style={{fontSize: '1.2em', fontWeight: '300' }}>western pacific builders was great - I would definitely recommend! They clearly explained to me how programs work, what benefits they would provide, and how I could save money. They really went out of their way to make the whole process simple & easy. Also, patient and very good at communication/correspondence along the way. If you want to save money, I'd say give them a try.</p>
                      </Row>
                      <Row style={{position: 'relative', marginTop: '-20px', backgroundClip: 'padding-box'}}>
                        <Col xs={4} lg={4}>
                          <Image src="assets/img/icons/comment-4.jpeg" style={{ width: '110px', height: '110px', overflow: 'hidden', objectFit: 'cover' }} width="320" height="213" roundedCircle ></Image>
                        </Col>
                        <Col xs={8} lg={8}>
                          <Row>
                            <h5 style={{textAlign: 'left', fontWeight: '600',  color: '#000000', marginTop: '20px',}}>
                              LARA SAMSON
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
                  <Col xs={12} sm={12} lg={5} className="text-center offset-lg-1" style={{display: 'inline-block', backgroundClip: 'padding-box'}}>                      
                      <Row >
                        <p className="font-italic" style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px', fontSize: '1.2em', fontWeight: '300', paddingBottom: '15px'  }}>Western Pacific Builders performed an assessment on my home. They measured different inefficiencies and realized the rate I was paying was too high. Thankfully, they enrolled me in a savings program for free that reduced my costs by $40/month. I highly recommend having them test the home to see if you can save too.</p>
                      </Row>
                      <Row style={{position: 'relative', marginTop: '-20px', backgroundClip: 'padding-box'}}>
                        <Col xs={4} lg={4}>
                          <Image src="assets/img/icons/comment-5.jpg" style={{ width: '110px', height: '110px', overflow: 'hidden', objectFit: 'cover' }} width="1456" height="1920" roundedCircle ></Image>
                        </Col>
                        <Col xs={8} lg={8}>
                          <Row>
                            <h5 style={{textAlign: 'left', fontWeight: '600',  color: '#000000', marginTop: '20px',}}>
                              ARI CHAPMAN
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
                  <Col xs={12} sm={12} lg={10} className="text-center offset-lg-1" style={{ display: 'inline-block', backgroundClip: 'padding-box'}}>
                      <Row>
                        <p className="font-italic" style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px', fontSize: '1.2em', fontWeight: '300', paddingBottom: '15px'  }}>Western Pacific Builders checked out my house and helped analyze where to lower costs for free. My whole cost of living is down and I couldn't be happier. I didn't even realize there were savings to find. With no change in my lifestyle, and with no hassle at all, I'm just saving. Jimmy who came and did my energy assessment was a pro. I already recommended them to friends and family, and I never do yelp reviews, but here I am. No brainer.</p>
                      </Row>
                      <Row style={{position: 'relative', marginTop: '-20px', backgroundClip: 'padding-box'}}>
                        <Col xs={4} lg={4}>
                          <Image src="assets/img/icons/comment-6.jpeg" style={{ width: '110px', height: '110px', overflow: 'hidden', objectFit: 'cover' ,}} width="427" height="375" roundedCircle ></Image>
                        </Col>
                        <Col xs={8} lg={8}>
                          <Row>
                            <h5 style={{textAlign: 'left', fontWeight: '600',  color: '#000000', marginTop: '20px',}}>
                              ANDREW MASON
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
                <Row className="mt-5 mx-auto d-block text-center" >
              <Col xs={12}>
                <button
                  onClick={() => this.setModalShow(true)}
                  className="btn-style-dark-gray mx-auto d-block mb-5"
                  variant="outline-secondary">GET A FREE ASSESSMENT</button>
              </Col>
            </Row>
              </Col>
            </Row>
          </Container>
          <Container className="mt-5 mb-5 div-padding">
            <ContactForm />
          </Container>
        <Footer />
      </div>
    )
  }
}

export default HeaderImage;