import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components/button';
import { useDispatch } from 'react-redux';
import { logout } from '../../slices/userSlice';
import { useAuthentication } from '../../services/authentication';
import { AppDispatch } from '../../config/store';

const ProfileScreen: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const auth = useAuthentication();

    const handleLogout = () => {
        dispatch(logout());
        auth.logout();
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.text}>This is your profile page.</Text>
            <Button variant='secondary' onPress={handleLogout} >Logout</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#555',
    },
});

export default ProfileScreen;
