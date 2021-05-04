import axios from 'axios';

const backend = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000
})

const authProvider = {
  login: ({ username, password }) =>  {
    return backend.post('/auth/sign_in', {email: username, password})
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }

        localStorage.setItem('token', JSON.stringify(response.headers));
        return response.data.data;
      })
      .then(auth => {
        localStorage.setItem('auth', JSON.stringify(auth));
        localStorage.setItem('permissions', JSON.stringify(auth.permissions));
      })
      .catch(e => {
        console.log(e)
        throw new Error('Network error')
      });
  },
  // ...
  checkError: error => Promise.resolve(),
  checkAuth: params => {
    console.log('[AUTH][PROVIDER]: checkAuth')
    return localStorage.getItem('auth')
      ? Promise.resolve()
      : Promise.reject()
  },
  logout: () => {
    console.log('[AUTH][PROVIDER]: logout')
    localStorage.removeItem('auth')
    localStorage.removeItem('permissions')
    localStorage.removeItem('token')
    return Promise.resolve()
  },
  getIdentity: () => {
    console.log('[AUTH][PROVIDER]: getIdentity')
    try {
      const { id, email } = JSON.parse(localStorage.getItem('auth'));
      return Promise.resolve({ id, fullName: email });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // authorization
  getPermissions: params => {
    console.log('[AUTH][PROVIDER]: getPermissions')
    const role = JSON.parse(localStorage.getItem('permissions'));
    console.log('getting role', role)
    return role ? Promise.resolve(role) : Promise.reject();
  }
};

export default authProvider;
