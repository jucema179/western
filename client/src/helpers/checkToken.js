import Axios from 'axios';
import { setAuthorizationToken } from './setAuthorizationToken';

export const checkToken = () => new Promise((resolve, reject) => {
  // is a promise because I'm going to check if the token is valid with a request to backend
  const token = localStorage.getItem('jwtToken');
  if (token) {
    setAuthorizationToken(token);
    Axios.post('/api/auth/check-session-token', { token })
      .then((res) => {
        if (res.data.success) {
          resolve(res.data);
        } else {
          reject();
        }
      })
      .catch(() => {
        reject();
      });
  } else {
    // localStorage.removeItem('currentDatabase');
    // localStorage.removeItem('currentAccountFolder');
    // localStorage.removeItem('currentAccountFolder');
    reject();
  }
});
