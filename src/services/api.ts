import axios from 'axios';
import {
    isAuthenticated,
    getToken,
    isTokenValid,
} from '../utils/authentication';
import { Alert } from 'react-native';

export const api = axios.create({
    baseURL: 'http://localhost:8000/api',//config.baseApiUrl,
    timeout: 10000,
});

api.interceptors.request.use(async apiConfig => {
    const newConfig = apiConfig;
    const isAuth = await isAuthenticated();
    if (isAuth && !newConfig.headers.authorization) {
        newConfig.headers.authorization = `Bearer ${await getToken()}`;
    }

    return newConfig;
});

// api.interceptors.response.use(
//     response => Promise.resolve(response),
//     async (error) => {
//         if (error.message === 'Network Error') {
//             const currentToken = await getToken();
//             const isValid = currentToken && isTokenValid(currentToken);

//             if (!isValid) {
//                 // EventEmmiter.emit(AuthenticationConstants.AUTHENTICATION_TOKEN_EXPIRED);
//                 return Promise.reject(error);
//             }
//         }

//         return Promise.reject(error);
//     },
// );

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message =
            error.response?.data?.message ||
            'An unexpected error occurred. Please try again later.';
        Alert.alert('Error', message);
        return Promise.reject(error);
    }
);

export default api;
