import { jwtDecode } from 'jwt-decode';
import * as Storage from './storage';
// import * as EventListeners from 'utils/event-listeners';

// import {api} from '../services';
const STORAGE_PREFIX = 'habitual';
export const AUTHENTICATION_TOKEN_KEY = `${STORAGE_PREFIX}/authentication/token`;

export async function getToken() {
  return Storage.getItem(AUTHENTICATION_TOKEN_KEY);
}

export function setToken(token: string) {
  return Storage.setItem(AUTHENTICATION_TOKEN_KEY, token);
}

export function isTokenValid(token: string) {
  const decodedToken = jwtDecode<{ exp: number }>(token);
  const isExpired = decodedToken.exp
    ? decodedToken.exp * 1000 < Date.now()
    : true;

  if (isExpired) {
    return false;
  }

  return true;
}

export async function isAuthenticated() {
  try {
    const token = await getToken();
    if (token) {
      return isTokenValid(token);
    }
    return false;
  } catch (error) {
    return false;
  }
}

export function decodeToken(token: string) {
  return jwtDecode(token);
}

export async function logout() {
  //   EventListeners.clear();
  Storage.clear();
  // api.interceptors.request.use(config => {
  //   const newConfig = {...config};
  //   delete newConfig.headers.authorization;
  //   return newConfig;
  // });
}
