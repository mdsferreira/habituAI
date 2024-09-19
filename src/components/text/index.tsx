import { Text as RNText, TextProps } from 'react-native'
import React, { FC, } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Font, FontVariant, Size } from '../../types/theme';


interface TextProperties extends Font {
    fontVariant: Size;
    variant: FontVariant;
    children: any;
}

export const Text: FC<TextProperties> = (props) => {
    const { fontVariant, variant, children, ...rest } = props;
    const theme = useTheme();

    const customStyle = {
        ...rest,
        fontSize: theme.typography.size[fontVariant]
    }

    const font = theme.typography.text[variant];

    return (
        <RNText style={{ ...font, ...customStyle }} >{children}</RNText>
    )
}