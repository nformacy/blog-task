import Cookies from 'js-cookie'
import { env } from 'src/config';

export const getToken = () => {
  const token = Cookies.get(env.tokenCookieName);

  return token;
}

export const setToken = token => {
  Cookies.set(env.tokenCookieName, token)
}
