import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../../config/theme'


const COLORS = ["#E0CBF6", "#B486EA", "#9452E0", "#611FAD", "#3A1268", "#1D0934",
    "#94CF26", "#CFD20F", "#64C1E3", "#E05252", "#EF822E", "#FC60A8"]

export interface ColorSelectProps {
    setColor(color: string): void,
    setColorSelection: React.Dispatch<React.SetStateAction<boolean>>
};

export default function ColorSelect({ setColor, setColorSelection }: ColorSelectProps) {
    const selectColor = (newColor: string) => {
        setColor(newColor)
        setColorSelection(false);
    }

    return (
        <View style={styles.container}>
            {COLORS.map((color) => <TouchableOpacity
                onPress={() => selectColor(color)}
                style={{ backgroundColor: color, ...styles.color }} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: theme.colors.black,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
    },
    color: {
        margin: 5,
        width: 100,
        height: 100,
        borderRadius: 50,

    }

})