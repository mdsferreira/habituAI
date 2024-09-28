import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import React, { FC } from 'react';
import { Theme, VariantType } from '../../types/theme';
import { useTheme } from '../../hooks/useTheme';

interface InputProps extends TextInputProps {
    variant?: VariantType
}

export const Input: FC<InputProps> = (props) => {
    const theme = useTheme();

    const styles = makeStyles(theme);

    return (
        <TextInput style={styles.input} {...props}>
            {props.children}
        </TextInput>
    )
}


const makeStyles = (theme: Theme) =>
    StyleSheet.create({
        input: {
            width: "100%",
            borderTopEndRadius: 15,
            borderColor: theme.colors.primary.main,
            borderBottomWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            //backgroundColor: theme.colors.primary.light,
            alignSelf: "center",
            padding: 15,
        }
    })