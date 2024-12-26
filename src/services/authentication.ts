import { useDispatch } from 'react-redux';
import api from './api';
import { loginSuccess, setToken } from '../slices/userSlice';
import { Alert } from 'react-native';
import { API_ROUTES } from './constants';
import * as AuthenticationUtils from '../utils/authentication';
import { AppDispatch } from '../config/store';
import { ROUTES } from '../config/routes';
import { showError } from '../components/showError';
import { NavigationProp } from '@react-navigation/native';


export const useAuthentication = (navigation?: NavigationProp<any, any>) => {
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
            else {
                dispatch(setToken({ token }));
            }
        } catch (error: any) {
            showError(error);
        }
    }

    const register = async (name: string, email: string, password: string, confirmPassword: string) => {
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }

        try {
            await api.post(API_ROUTES.register, {
                name,
                email,
                password,
            });

            Alert.alert('Success', 'Account created successfully! You can now log in.');
            navigation && navigation.navigate(ROUTES.login);
        } catch (error: any) {
            showError(error);
        }
    };

    const logout = () => {
        AuthenticationUtils.logout()
    }

    return {
        login,
        register,
        logout
    }
}
