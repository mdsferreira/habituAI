import React, { FC } from 'react'
import { StyleSheet, ImageBackground, Dimensions, Image, View, SafeAreaView, StatusBar } from 'react-native'
import { NavigationProp } from '@react-navigation/native';
import { Button, Text } from '@/components';
import { ROUTES } from '@/config/routes';

export interface InitialScreenProps {
    navigation: NavigationProp<any, any>
};
const InitialScreen: FC<InitialScreenProps> = ({ navigation }) => {
    const goToLogin = () => {
        navigation.navigate(ROUTES.login);
    };

    const goToSignUp = () => {
        navigation.navigate(ROUTES.register);
    };

    return (
        <SafeAreaView style={{ height: Dimensions.get('window').height }}>
            <StatusBar
                animated={true}
                backgroundColor='#1a31b0'
                barStyle='dark-content'
            />
            <ImageBackground source={require('../../assets/images/bg.jpeg')} resizeMode="cover" style={styles.bg} >
                <View style={styles.background} />
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/logo.png')}
                    />
                    <Text fontVariant="md" variant='title' >HabituAI</Text>
                    <Text fontVariant="md" variant='title' >Enjoy your new journey</Text>
                </View>
                <View style={styles.bottom}>
                    <Button variant="solid" action="primary" style={{ marginTop: 20 }} onPress={goToLogin}>Login</Button>
                    <Button variant="solid" action="secondary" style={{ marginTop: 20 }} onPress={goToSignUp}>SignUp</Button>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default InitialScreen;

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 10,
        height: Dimensions.get('window').height,
        padding: 20,
        alignItems: "center",
        flexDirection: "column",
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 2

    },
    bottom: {
        width: "100%",
        flex: 1,
    },
    name: {
        marginTop: 10,
    },
    title: {

    },
    logo: {
        width: 100,
        height: 100,
    }
})