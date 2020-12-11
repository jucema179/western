import React, { Component } from 'react';
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StowellBox from '../../GlobalComponents/StowellBox';
import Button from '../../GlobalComponents/FormComponents/Button';
import { sendRecoveryEmail } from '../../../actions/appActions';
import TextInput from '../../GlobalComponents/FormComponents/TextInput';
import {
  Label, Text, ButtonsContainer, Message,
} from '../../GlobalComponents/FormComponents/StyledComponents';

class PasswordRecovery extends Component {
  state = {
    email: '',
    emailSended: false,
    sendingEmail: false,
    errorMessage: '',
    successMessage: '',
    notAssociated: false,
    notAssociatedMessage: '',
  }

  textInput = React.createRef();

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ email: value });
  }

  focusTextbox = () => {
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
  }

  handleSubmit = (e) => {
    this.setState({
      sendingEmail: true,
      notAssociated: false,
      notAssociatedMessage: '',
    });
    e.preventDefault();
    const { email } = this.state;
    const { sendRecoveryEmailProp } = this.props;
    sendRecoveryEmailProp(email)
      .then(() => {
        this.setState({
          sendingEmail: false,
          emailSended: true,
          successMessage: 'Please check your email. We have just emailed you a link to reset your password.',
          errorMessage: '',
        });
      })
      .catch((error) => {
        if (error.type === 'notAssociated') {
          this.setState({
            sendingEmail: false,
            notAssociated: true,
            notAssociatedMessage: error.message,
          });
        } else {
          this.setState({ sendingEmail: false, errorMessage: error.message });
          this.focusTextbox();
        }
      });
  }

  checkInputNull = (e) => {
    const { email } = this.state;
    if (!email) {
      this.setState({ errorMessage: 'Fill email input' });
      this.focusTextbox();
      e.preventDefault();
    }
  }

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const {
      email, errorMessage, sendingEmail, emailSended, successMessage, notAssociated, notAssociatedMessage,
    } = this.state;
    return (
      <StowellBox width="456">
        {
          !!successMessage
          && (
          <Message
            style={{ fontSize: '13px', fontWeight: 100, paddingBottom: '15px' }}
            color="#4CAF50"
          >{successMessage}
          </Message>
          )
        }
        {
          notAssociated
          && (
            <Message
              style={{
                fontSize: '13px',
                fontWeight: 100,
                paddingBottom: '15px',
                width: '400px',
              }}
              color="#ED2A2A"
            >{notAssociatedMessage}
            </Message>
          )
        }
        <Text bold fontSize="20">Password recovery</Text>
        <MarginTop marginTop="5" />
        <Label fontColor="#37474F">Enter your email address and we’ll send you an email with a link to reset your password.</Label>
        <Form onSubmit={this.handleSubmit}>
          <Label error={!!errorMessage}>Email address</Label>
          {
            !!errorMessage
            && <Message color="#ED2A2A">{errorMessage}</Message>
          }
          <TextInput
            success={!!successMessage}
            error={!!errorMessage}
            innerRef={this.textInput}
            type="email"
            onChange={this.handleChange}
            value={email}
          />
          <ButtonsContainer>
            <Button
              onClick={this.checkInputNull}
              disabled={sendingEmail || emailSended}
              icon={emailSended ? faCheck : faEnvelope}
              text="Send password reset link"
              type="submit"
            />
          </ButtonsContainer>
          <ButtonsContainer>
            <NewLink to="/login">Back to Sign in</NewLink>
          </ButtonsContainer>
        </Form>
      </StowellBox>
    );
  }
}

const NewLink = styled(Link)`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #19A2C5;
  display: inline-block;
  float: right;
  text-decoration: none;
  &:hover {
    color: #117189;
  }
`;

PasswordRecovery.propTypes = {
  sendRecoveryEmailProp: PropTypes.func.isRequired,
  // history: PropTypes.shape({ foo: { bar: {} } }).isRequired,
};

const Form = styled.form`
  margin-top: 22px;
`;
const MarginTop = styled.div`
  margin-top: ${({ marginTop }) => (MarginTop ? marginTop : '0')}px;
`;
const mapDispatchToProps = dispatch => ({
  sendRecoveryEmailProp(email) {
    return dispatch(sendRecoveryEmail(email));
  },
});

export default connect(null, mapDispatchToProps)(withRouter(PasswordRecovery));
