import { DimensionValue, StyleSheet, TextInput, TextInputProps } from 'react-native';
import React, { FC } from 'react';
import { Theme, VariantType } from '../../types/theme';
import { useTheme } from '../../hooks/useTheme';

interface InputProps extends TextInputProps {
    variant?: VariantType,
    borderColor?: string,
    width?: DimensionValue | undefined
}

export const Input: FC<InputProps> = (props) => {
    const theme = useTheme();
    const styles = makeStyles(theme);

    return (
        <TextInput style={{ width: props.width || "100%", borderColor: props.borderColor || theme.colors.primary.main, ...styles.input }}
            placeholderTextColor="black"
            selectionHandleColor="black"
            textAlign="left"
            {...props}>
            {props.children}
        </TextInput>
    )
}


const makeStyles = (theme: Theme) =>
    StyleSheet.create({
        input: {
            borderTopEndRadius: 15,
            borderBottomWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            alignSelf: "center",
            padding: 15,
        }
    })