import { Theme } from "../types/theme";

export const theme: Theme = {
    colors: {
        primary: {
            main: "#6002ee",
            light: "#d4bff9",
            dark: "#1c00db",
        },
        secondary: {
            main: "#90ee02",
            light: "#f0f0f0",
            dark: "#09af00",
        },
        background: "#f0f0f0",
        white: "#ffffff",
        black: "#212121",
        success: "#4CAF50",
        warning: "#FFEB3B",
        error: "#F44336",
    },
    typography: {
        text: {
            primary: {
                fontFamily: 'DMSans-Regular',
                textAlign: "center",
                color: "white",
                fontWeight: "bold"
            },
            secondary: {
                fontFamily: 'DMSans-Regular',
                textAlign: "center",
                color: "black",
                fontWeight: "bold"
            },
            title: {
                fontFamily: 'DMSans-Regular',
                color: "white",
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
            },
            body: {
                fontFamily: 'DMSans-Regular',
                color: "black",
                fontWeight: "400"
            },
        },
        size: {
            xs: 12,
            sm: 16,
            md: 20,
            lg: 24,
            xl: 30
        },
    },
    mode: 'light',
    spacing: {
        xs: 10,
        sm: 20,
        md: 40,
        lg: 60,
        xl: 80,
    }
}