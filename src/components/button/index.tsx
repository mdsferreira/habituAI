import {
    StyleSheet, View, TouchableWithoutFeedback, TouchableWithoutFeedbackProps
} from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '../../hooks/useTheme';
import { VariantType, Theme } from '../../types/theme';
import { Text } from '../text';

interface ButtonProps extends TouchableWithoutFeedbackProps {
    variant?: VariantType
}

export const Button: FC<ButtonProps> = (props) => {
    const { variant = "primary", style } = props;
    const theme = useTheme();
    const styles = makeStyles({ ...theme, variant });

    return (
        <TouchableWithoutFeedback {...props} >
            <View style={{ ...styles.button, ...style }}>
                <Text fontVariant="sm" variant={variant}>
                    {props.children}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

interface StylesProps extends Theme {
    variant: VariantType
}

const makeStyles = ({ colors, variant }: StylesProps) =>
    StyleSheet.create({
        button: {
            width: "100%",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            backgroundColor: variant === "secondary" ? colors[variant].light : colors[variant].main,
            alignSelf: "center",
        }
    })