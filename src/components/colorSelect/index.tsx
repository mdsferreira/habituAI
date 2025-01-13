import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '@/config/theme'
import { Box } from '../ui'
import classNames from 'classnames';


const COLORS = ["bg-blue-500", "bg-cyan-300", "bg-indigo-500", "bg-amber-400", "bg-yellow-300", "bg-orange-400",
    "bg-green-400", "bg-lime-500", "bg-lime-300", "bg-red-500", "bg-fuchsia-400", "bg-pink-400"]

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
                key={color}
            >
                <Box className={classNames('m-2 w-24 h-24 rounded-full', { [color]: true })} />
            </TouchableOpacity>
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
})