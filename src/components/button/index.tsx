import {
    StyleSheet, View, TouchableWithoutFeedback, TouchableWithoutFeedbackProps,
    ActivityIndicator
} from 'react-native'
import React, { FC, useState } from 'react'
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
    const [isLoading, setLoading] = useState(false);

    const onPress = async (params: any) => {
        setLoading(true);
        await props.onPress(params)
        setLoading(false);
    }

    return (
        <TouchableWithoutFeedback {...props} onPress={onPress}>
            <View style={{ ...styles.button, ...style }}>
                <Text fontVariant="sm" variant={variant}>
                    {isLoading ? <ActivityIndicator color={variant === "primary" ? "#ffffff" : "#000000"} /> : props.children}
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
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            backgroundColor: variant === "secondary" ? colors[variant].light : colors[variant].main,
            alignSelf: "center",
        }
    })