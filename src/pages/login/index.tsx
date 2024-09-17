import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../../components/button/index'

export const Login = () => {
    return (
        <View style={styles.pageContener}>
            <ImageBackground source={require('../../assets/images/bg5.jpeg')} resizeMode="cover" style={styles.container}>
                <View style={styles.formContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/logo1.png')}
                    />
                    <Button ><Text>Get Start</Text></Button>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    pageContener: {
        height: Dimensions.get('window').height
    },
    container: {
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: Dimensions.get('window').height,
        backgroundColor: '#1a31b0',

    },
    formContainer: {
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: "60%",
        width: "100%",
        // justifyContent: "flex-end",
        backgroundColor: 'white',
        // opacity: 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    logo: {
        width: 100,
        height: 100,
    }
})