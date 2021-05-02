const authProvider = {
  login: ({ username, password }) =>  {
    const request = new Request('http://localhost:3000/auth/sign_in', {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(auth => {
        localStorage.setItem('auth', JSON.stringify(auth));
      })
      .catch(() => {
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
    return Promise.resolve()
  },
  getIdentity: () => {
    console.log('[AUTH][PROVIDER]: getIdentity')
    return Promise.resolve()
  },
  // authorization
  getPermissions: params => Promise.resolve(),
};

export default authProvider;
