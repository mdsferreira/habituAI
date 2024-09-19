export interface Theme {
    colors: Colors;
    mode: Mode;
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    typography: {
        text: {
            primary: Font;
            secondary: Font;
            title: Font;
        },
        size: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        },
    };
}

export interface Font {
    fontFamily?: string;
    fontWeight?: string | number;
    textAlign?: string;
    color?: string;
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    textShadowColor?: string,
    textShadowOffset?: { width: number, height: number },
    textShadowRadius?: number
}

export type Size = 'xs' | 'sm' | 'md' | 'xl' | 'lg';

export type FontVariant = 'primary'
    | 'secondary'
    | 'title'


export type Mode = 'light' | 'dark';

export type VariantType = 'primary' | 'secondary';

interface Colors {
    primary: {
        main: string;
        light: string;
        dark: string;
    };
    secondary: {
        main: string;
        light: string;
        dark: string;
    };
    background: string;
    white: string;
    black: string;
    success: string;
    warning: string;
    error: string;
}
