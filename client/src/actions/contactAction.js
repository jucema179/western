import Axios from 'axios';
import {
    SEND_CONTACT_SUCCESS, SEND_CONTACT_ERROR
  } from '../actionTypes/contactTypes';

export const sendContact = data => (dispatch) => new Promise((resolve, reject) => {
    Axios.post('/contact', { 
        firstName: data.firstName, 
        lastName: data.lastName, 
        email: data.email, 
        zip: data.zip, 
        phone: data.phone  
    })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
          dispatch({ type: SEND_CONTACT_SUCCESS });
        } else {
          reject(response.data);
          dispatch({ type: SEND_CONTACT_ERROR });
        }
      })
      .catch((error) => {
        reject(error.response.data || error);
        dispatch({ type: SEND_CONTACT_ERROR });
      });
});