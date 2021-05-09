import axios from 'axios';

export const backend = axios.create({
  baseURL: `${process.env.API_HOST}/api`,
  headers: {
    'X-Custom-Header': 'foobar',
    'Authorization': 'Bearer'
  },
  timeout: 3000
});

export const fetchFoobar = (id, token) =>
  backend.post('/will/pdf', {id}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

