import { useDispatch } from 'react-redux';
import api from './api';
import { loginSuccess } from '../slices/userSlice';
import { Alert } from 'react-native';
import { API_ROUTES } from './constants';
import * as AuthenticationUtils from '../utils/authentication';
import { AppDispatch } from '../config/store';

export const useAuthentication = () => {
    const dispatch = useDispatch<AppDispatch>();

    const login = async (email: string, password: string) => {
        try {
            const token = await AuthenticationUtils.getToken();
            if (!token || !AuthenticationUtils.isTokenValid(token)) {
                const response = await api.post(API_ROUTES.login, {
                    email,
                    password,
                });
                const { token, user } = response.data;
                AuthenticationUtils.setToken(token)
                dispatch(loginSuccess({ token, userInfo: user }));
            }
        } catch (err: any) {
            Alert.alert('Login Failed', err.response?.data?.error?.message || 'An error occurred');
        }
    }

    return {
        login
    }
}
