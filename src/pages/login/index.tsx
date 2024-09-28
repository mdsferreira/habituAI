import { StyleSheet, View, Image, Dimensions, ImageBackground, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React, { useState } from 'react'
import { Button } from '../../components/button/index'
import { Input } from '../../components/input'
import { Text } from '../../components/text'

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassWord] = useState('');

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
                        <Text variant='title' fontVariant='lg'>Welcome Back!</Text>
                        <Text variant='title' fontVariant='xs'>Continue your adventure.</Text>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.fields}>
                        <Input value={username} onChangeText={setUsername} placeholder={"Enter your username"} textContentType='emailAddress' />
                        <Input value={password} onChangeText={setPassWord} placeholder={"Enter your password"} textContentType='password' />
                        <View >
                            <Text variant='body' fontVariant='xs'>Remember me</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Button >Enter</Button>
                        <Text variant='body' fontVariant='xs'>Forget your password ?</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


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
    }
})