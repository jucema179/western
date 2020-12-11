import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Axios from 'axios';
import PropTypes from 'prop-types'
import {
  Form, Icon, Input, Button, Checkbox, Alert,
} from 'antd'
import {
  Login, setUser,
} from '../../actions/appAction';
import "antd/dist/antd.css";


const FormItem = Form.Item

class BodyContainerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: '',
      errors: this.getInitialStateForErrors(),
    };
  }

  static propTypes = {
    form: PropTypes.shape({
      validateFields: PropTypes.func,
      getFieldDecorator: PropTypes.func,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    dispatchSetUser: PropTypes.func.isRequired,
  }

  getInitialStateForErrors = () => ({
    top: {
      open: false,
      message: 'Error',
    },
    email: {
      open: false,
      message: 'Error',
    },
    password: {
      open: false,
      message: 'Error',
    },
  })

  hideALlErrorMessages = () => {
    this.setState({
      errors: this.getInitialStateForErrors(),
    });
  }

  setErrorMessage = (data) => {
    const { errors } = this.state;
    this.setState({
      loading: false,
      errors: {
        ...errors,
        ...data,
      },
    });
  }


  validateUserEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleSubmit = async (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    const { errors } = this.state;
    const { form, dispatchSetUser } = this.props
    form.validateFields(async (err, values) => {
      const isAValidEmail = this.validateUserEmail(values.email);
      if (!err) {
        if (isAValidEmail) {
          const resp = await this.props.dispatchLogin({
            user_email: values.email,
            user_password: values.password,
          });
          if (resp.success) {
            const response = await Axios.get('/api/users/current');
            const currentUser = response.data.user;
            this.props.setUser(currentUser);
            this.props.history.push('/testLogin');
          } else {
            const { type, message, unknown } = resp;
            if (type) {
              if (type === 'email') {
                const data = {
                  email: {
                    open: true,
                    message,
                  },
                };
                this.setErrorMessage(data);
              }
              if (type === 'password') {
                const data = {
                  password: {
                    open: true,
                    message,
                  },
                };
                this.setErrorMessage(data);
              }
            }
            if (unknown && !type) {
              const data = {
                top: {
                  open: true,
                  message,
                },
              };
              this.setErrorMessage(data);
            }
          }
        } else {
          this.setState({
            loading: false,
            errors: {
              ...errors,
              email: {
                open: true,
                message: 'Please enter a valid email address.',
              },
            },
          });
        }
      }
    });
  }

   render() {
    const { loading, errors } = this.state;
    const { form } = this.props
    const { getFieldDecorator } = form
    
     return (
       <Wrapper>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          <img
                    src="assets/img/icons/western.svg"
                    width="180"
                    height="80"
                    className="d-inline-block"
                    alt="React Bootstrap logo"
                />
        </FormItem>
        <FormItem
                  wrapperCol={{
                    xs: { span: 24, offset: 0 },
                    sm: { span: 24, offset: 0 },
                  }}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '*Please provide a Username.' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Usuario" />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '*Please provide a Password.' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" />,
          )}
        </FormItem>
        <Form.Item>
          <Link className="login-form__forgot-buttom">Forgot Password?</Link>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      </Wrapper>
     );
   }
}

const Wrapper = styled.div`
  background-color: rgba(200, 200, 200, 0.9);
  border: 1px;
  border-color: #FFFFFF;
  padding-left: 75px;
  padding-right: 75px;
  padding-top: 20px;
  padding-bottom: 40px;
  position: absolute;
  top: 20%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);  
  transition-property: background-color;
    transition-duration: .6s;
    transition-timing-function: linear;
  &:hover{
    transition-property: background-color;
    transition-duration: .6s;
    transition-timing-function: linear;      
    background-color: rgba(225, 225, 225, 0.9);
    }
   .login-form {
    margin: auto;
    margin-top: 50px;

    &__submit-buttom {
      width: 100%;
    }

    &__forgot-buttom {
      float: right;
      }

  }

  .ant-btn, .ant-input {
    border-radius: 0px !important;
  }

`

const mapStateToProps = store => ({
  user: store.appReducer.user,
});

const mapDispatchToProps = {
  dispatchLogin: Login,
  setUser,
};

const LoginPage = Form.create()(BodyContainerForm);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
