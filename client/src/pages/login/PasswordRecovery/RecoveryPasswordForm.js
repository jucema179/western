import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import Axios from 'axios';
import StowellBox from '../../GlobalComponents/StowellBox';
import {
  Label, Text, Message, ButtonsContainer, AlertBox,
} from '../../GlobalComponents/FormComponents/StyledComponents';
import TextInput from '../../GlobalComponents/FormComponents/TextInput';
import Button from '../../GlobalComponents/FormComponents/Button';

class RecoveryPasswordForm extends Component {
  state = {
    password: '',
    confirmPassword: '',
    errorMessage: '',
    loading: false,
    resetedDone: false,
  }

  confirmPassword = React.createRef();

  async componentWillMount() {
    await this.checkValidToken();
  }

  redirectToLogin = () => {
    const { history } = this.props;
    history.push('/login');
  }

  checkValidToken = async () => {
    const { match } = this.props;
    const { token } = match.params;
    if (token) {
      try {
        const { data } = await Axios.post('/api/auth/check-token', { token });
        if (!data.success) {
          this.redirectToLogin();
        }
      } catch (err) {
        this.redirectToLogin();
      }
    } else {
      this.redirectToLogin();
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value.trim(),
    });
  }

  focusInput = () => {
    if (this.confirmPassword.current) {
      this.confirmPassword.current.focus();
    }
  }

  checkForNumberInside = pass => /\d/.test(pass)

  checkForWordInside = pass => /\D/.test(pass)

  checkPasswords = (e) => {
    this.setState({ errorMessage: '' });
    const { confirmPassword, password } = this.state;
    if ((confirmPassword === password)) {
      let isError = false;
      if (password.length < 8) {
        this.setState({ errorMessage: 'Password must have at least 8 characters.' });
        isError = true;
      }
      if (!this.checkForNumberInside(password)) {
        this.setState({ errorMessage: 'Password must have at least a number.' });
        isError = true;
      }
      if (!this.checkForWordInside(password)) {
        this.setState({ errorMessage: 'Password must have at least a letter.' });
        isError = true;
      }
      if (isError) {
        this.focusInput();
        e.preventDefault();
      }
    } else {
      this.setState({ errorMessage: 'Passwords do not match.' });
      this.focusInput();
      e.preventDefault();
    }
  }

  resetPassword = () => {
    const { match } = this.props;
    const { password } = this.state;
    const { token } = match.params;
    Axios.post('/api/auth/reset-password', { token, newPassword: password })
      .then((res) => {
        if (res.data.success) {
          this.setState({ resetedDone: true });
        } else {
          this.setState({ errorMessage: res.data.message });
        }
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.resetPassword();
  }

  goBack = () => {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    const {
      errorMessage, successMessage, password, confirmPassword,
      loading, resetedDone,
    } = this.state;
    return (
      <StowellBox width="456">
        <Text bold fontSize="20">Reset password</Text>
        <MarginTop marginTop="20" />
        {
          resetedDone
          && (
          <AlertBox>
            <Text fontSize="17">Your password has been updated</Text>
          </AlertBox>
          )
        }
        <form onSubmit={this.handleSubmit}>
          <MarginTop marginTop="20" />
          <Label>New password (must include at least one number)</Label>
          <TextInput
            success={!!successMessage}
            error={!!errorMessage}
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            disabled={resetedDone}
          />
          <MarginTop marginTop="20" />
          <Label error={!!errorMessage}>Confirm password</Label>
          {
            !!errorMessage
            && <Message color="#ED2A2A">{errorMessage}</Message>
          }
          <TextInput
            success={!!successMessage}
            error={!!errorMessage}
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={confirmPassword}
            innerRef={this.confirmPassword}
            disabled={resetedDone}
          />
          <ButtonsContainer justifyContent={resetedDone ? 'space-between' : 'flex-start'}>
            {
              resetedDone
              && (
              <Button
                onClick={this.goBack}
                backgroundColor="#19A2C5"
                icon={faArrowLeft}
                text="Login"
                width="87px"
              />
              )
            }
            <Button
              backgroundColor={resetedDone ? 'green' : false}
              text={resetedDone ? 'Updated' : 'Update'}
              onClick={this.checkPasswords}
              disabled={loading || !(!!confirmPassword && !!password) || resetedDone}
              width="87px"
              type="submit"
            />
          </ButtonsContainer>
        </form>
      </StowellBox>
    );
  }
}

RecoveryPasswordForm.propTypes = {
  match: PropTypes.shape({ params: { token: PropTypes.string.isRequired } }).isRequired,
  history: PropTypes.shape({ foo: { bar: {} } }).isRequired,
  logged: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  logged: store.AppReducer.logged,
});

export default connect(mapStateToProps)(withRouter(RecoveryPasswordForm));

const MarginTop = styled.div`
  margin-top: ${({ marginTop }) => (MarginTop ? marginTop : '0')}px;
`;
