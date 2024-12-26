import { Alert } from 'react-native';

export const showError = (error: any) => {
    const message =
        error.response?.data?.message || error.message || 'An unknown error occurred.';
    Alert.alert('Error', message);
};