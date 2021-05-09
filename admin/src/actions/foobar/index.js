import { fetchFoobar as fetchFoobarApi } from '@/api';

export const fetchFoobar = () => {
  return dispatch => new Promise((resolve, reject) => {
    fetchFoobarApi()
      .then(res => {
        dispatch({
          type: 'fetch/foobar',
          payload: res.data
        })
        resolve(res);
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}
