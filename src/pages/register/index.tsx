import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, Dimensions } from 'react-native'
import { Button, Input, Text } from '@/components';
import { useAuthentication } from '@/services/authentication';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const auth = useAuthentication(navigation)

    return (
        <View style={styles.pageContener}>
            <ImageBackground source={require('../../assets/images/bg.jpeg')} resizeMode="cover" style={styles.bg} >
                <View style={styles.background} />
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/logo.png')}
                    />
                    <View style={styles.title}>
                        <Text variant='title' fontVariant='lg'>Create an Account</Text>
                        <Text variant='title' fontVariant='xs'>Continue your adventure.</Text>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <Input
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        textContentType='password'
                    />
                    <Input
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        textContentType='password'
                    />
                    <View style={styles.bottom}>
                        <Button onPress={() => auth.register(navigation, email, password, confirmPassword)} variant='primary'  >Register</Button>
                        <Button
                            onPress={() => navigation.navigate('Login')}
                            variant='secondary'
                        >Go to Login</Button>
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContener: {
        height: Dimensions.get('window').height
    },
    container: {
        borderTopRightRadius: 10,
        justifyContent: 'space-between',
        height: Dimensions.get('window').height,
        //backgroundColor: '#1a31b0',
    },
    bg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: Dimensions.get('window').height
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: Dimensions.get('window').height,
        opacity: 0.90,
        backgroundColor: "#28105e"
    },
    header: {
        marginTop: 20,
    },
    title: {
        paddingLeft: 20
    },
    formContainer: {
        borderTopRightRadius: 25,
        //borderTopLeftRadius: 25,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        height: "70%",
        width: "100%",
        padding: 20,
        // justifyContent: "flex-end",
        backgroundColor: 'white',
        // opacity: 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    fields: {
        width: "100%",
        justifyContent: 'space-between',
        height: 150
    },
    logo: {
        width: 100,
        height: 100,
    },
    bottom: {
        width: "100%",
    },
})

export default RegisterScreen;
