import { StyleSheet, Text as RNText, TextProps } from 'react-native'
import React from 'react';

type Size = 's' | 'm' | 'l' | 'xl'

interface TextProperties extends TextProps {
    size: Size;
}

const fontSizeMap = {
    s: "fontS",
    m: "fontM",
    l: "fontL",
    xl: "fontXL"
}

export default function Text(props: TextProperties) {
    const { size } = props;
    const font = props.size ? styles[fontSizeMap[size]] : {};
    return (
        <RNText {...props} style={{ ...styles.font, ...props.style, ...font }} >{props.children}</RNText>
    )
}

const styles = StyleSheet.create({
    font: {
        color: "#ffffff",
        fontFamily: 'DMSans-Regular',
    },
    fontS: {
        fontSize: 12,
    },
    fontM: {
        fontSize: 18,
    },
    fontL: {
        fontSize: 24,
    },
    fontLX: {
        fontSize: 32,
    }

})