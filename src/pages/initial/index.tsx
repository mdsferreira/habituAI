import { StyleSheet, ImageBackground, Dimensions, Image, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Text from '../../components/text'
import Button from '../../components/button'

export default function Initial() {
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor='#1a31b0'
                barStyle='dark-content'
            />
            <ImageBackground source={require('../../assets/images/bg6.jpeg')} resizeMode="cover" style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/images/logo.png')}
                        />
                    </View>
                    <Text size="l" style={styles.title} >Enjoy your new journey</Text>
                </View>
                <View style={styles.bottom}>
                    <Button color="primary">Login</Button>
                    <Button color="secondary">SignUp</Button>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 10,
        alignItems: 'flex-start',
        height: Dimensions.get('window').height,
        backgroundColor: '#28105e',
        padding: 20,
        justifyContent: "space-around"

    },
    header: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 90
    },
    bottom: {
        width: "100%",
        marginBottom: 100,
        justifyContent: "space-between",
        height: 120
    },
    logoContainer: {
        backgroundColor: "#28105e",
        borderRadius: 15,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 20
    },
    title: {
        marginTop: 40,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    logo: {
        width: 80,
        height: 80,
    }
})