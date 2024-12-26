import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Text } from '../../components/text';
import { theme } from '../../config/theme';
import { Button } from '../../components/button';

export interface EmptyHabistProps {
    onPres(): void
};

const EmptyHabist: React.FC<EmptyHabistProps> = ({ onPres }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('../../assets/images/home.jpeg')}
            />
            <Button onPress={onPres} variant='primary'>
                Create your first habit
            </Button>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img: {
        width: 300,
        height: 300,
    }

});

export default EmptyHabist