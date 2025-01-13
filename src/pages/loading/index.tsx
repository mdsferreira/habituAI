import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const LoadingScreen = () => {
    return (
        <View
            style={styles.container}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/logo.png')}
                />
            </View>
        </View>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: Dimensions.get('window').height,
        flex: 1,
        flexDirection: 'row',
    },
    containerImg: {
        justifyContent: "center",
        alignSelf: "center",
    },
    logo: {
        width: 150,
        height: 150,
    },
});
