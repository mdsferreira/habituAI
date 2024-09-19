import * as React from 'react'
import { Theme } from '../types/theme';
import { theme } from '../config/theme';

export const ThemeContext = React.createContext({} as Theme);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>

}

