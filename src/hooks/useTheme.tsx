import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../types/theme';

export function useTheme(): Theme {
    const theme = useContext<Theme>(ThemeContext);
    return theme;
}
