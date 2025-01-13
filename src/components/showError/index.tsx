import { Alert } from 'react-native';

const ShowError = (error: any) => {
    const message =
        error.response?.data?.message || error.message || 'An unknown error occurred.';
    Alert.alert('Error', message);
};

export default ShowError;