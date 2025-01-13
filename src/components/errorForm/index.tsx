import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '@/components/text'
import { theme } from '@/config/theme'

export interface NewHabitModalProps {
    children?: string
};

function ErrorForm(props: NewHabitModalProps) {
    return (
        <View style={styles.container}>
            <Text fontVariant='sm' variant='body' marginLeft={10} color={theme.colors.error}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
})

export default ErrorForm;