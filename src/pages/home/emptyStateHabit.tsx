import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Button } from '@/components'

export interface EmptyHabistProps {
    onPres(): void
};

const EmptyHabit: React.FC<EmptyHabistProps> = ({ onPres }) => {
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

export default EmptyHabit