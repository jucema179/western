import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { sendContact } from '../../actions/contactAction';
import { Formik } from 'formik'
import Swal from 'sweetalert2'
import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string().required("*Please provide a First Name.").min(2, "*First Names must have at least 2 characters.")
  .max(100, "*First Names can't be longer than 100 characters."),
  lastName: yup.string().required("*Please provide a Last Name.").min(2, "*Last Names must have at least 2 characters.")
  .max(100, "*Last Names can't be longer than 100 characters."),
  email: yup.string().required("*Please provide an Email Address.").email("*Must be a valid Email Address."),
  zip: yup.string().required("*Please provide a ZIP Code."),
  phone: yup.string().required("*Please provide a Phone."),
});

class ContactForm extends Component {
  state = {
    validated: false,
    setValidated: false,
  };



  componentWillMount() {

  }

  validateUserEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleSubmit = async (event) => {
    const form = event.currentTarget;      
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const email = event.target.email.value;
      const zip = event.target.zip.value;
      const phone = event.target.phone.value;

      const isAValidEmail = this.validateUserEmail(email);
      if (isAValidEmail) {
        const resp = await this.props.dispatchContact({
          firstName,
          lastName,
          email,
          zip,
          phone
        });

        if (resp.data.success) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been sent, Thank you!',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Your message has not been sent',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    }

    this.setState({ setValidated: true });
  }

  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center" >START WITH A FREE ENERGY ASSESSMENT</h2>
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
          <Row>
            <h4 className="text-center" style={{ lineHeight: '36px', fontWeight: '300' }}>
              Control your energy costs and save on your monthly bill while making your world sustainable.
                </h4>
          </Row>
          <Row>
            <p className="text-justify" style={{ fontWeight: '400', fontSize: '0.7em' }}>
              By clicking below, I agree that Western Pacific Builders can contact me via automated technology and/or pre-recorded messages using the number provided. I understand that this consent is not required to make a purchase.
                </p>
          </Row>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{ firstName:"", lastName:"", phone:"", email:"", zip:""}}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
                <Form noValidate onSubmit={this.handleSubmit}>
                  <Form.Row>
                    <Col xs={12} lg={6}>
                      <Form.Group controlId="formGroupFirst">
                        <Form.Label>FIRST</Form.Label>
                        <Form.Control
                          required 
                          type="text" 
                          name="firstName" 
                          style={{ borderRadius: '0px' }}
                          placeholder="Enter first" 
                          value={values.firstName}
                          onChange={handleChange}
                          isInvalid={!!errors.firstName}
                        />          
                          <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                          </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Form.Group controlId="formGroupLast">
                        <Form.Label>LAST</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="lastName" 
                          style={{ borderRadius: '0px' }}
                          placeholder="Enter last" 
                          value={values.lastName}
                          onChange={handleChange}
                          isInvalid={!!errors.lastName}
                        />                        
                          <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                          </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col xs={12} lg={12}>
                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email" 
                          style={{ borderRadius: '0px' }}
                          placeholder="Enter email" 
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col xs={12} lg={6}>
                      <Form.Group controlId="formGroupZip">
                        <Form.Label>ZIP</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="zip" 
                          style={{ borderRadius: '0px' }}
                          placeholder="Enter ZIP" 
                          value={values.zip}
                          onChange={handleChange}
                          isInvalid={!!errors.zip}                        
                        />
                          <Form.Control.Feedback type="invalid">
                            {errors.zip}
                          </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Form.Group controlId="formGroupPhone">
                        <Form.Label>PHONE</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="phone" 
                          style={{ borderRadius: '0px' }}
                          placeholder="Enter phone" 
                          value={values.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}                            
                        />
                          <Form.Control.Feedback type="invalid">
                            {errors.phone}
                          </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Col xs={12} className="text-center">
                    <button
                      type="submit"
                      className="btn-submit"
                      // disabled={!isValid}
                      variant="outline-secondary">SUBMIT</button>
                  </Col>
                </Form>
              )}
          </Formik>
        </Container>
      </div>
    )
  }
}

// const Background = styled.div`
//     background-color: #DFDFDD;
//     position: absolute;
//     width: 100%;
//     height: all;
//     min-height: 100%;
//     display: flex;
//     justify-content: center;

// `;

const mapStateToProps = store => ({
  // dispatchContact: store.AppReducer.logged,
})

const mapDispatchToProps = {
  dispatchContact: sendContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactForm));