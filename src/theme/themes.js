import { createTheme } from "@mui/material";

// Espaçamento padrão (in pixels)
const spacing = 8;

// Breakpoints para responsividade
const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
};

const typography = {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: 14,
    htmlFontSize: 16,
    h1: {
        fontSize: "3.815rem",
        fontWeight: 700,
        lineHeight: 1.2,
    },
    h2: {
        fontSize: "3.052rem",
        fontWeight: 600,
        lineHeight: 1.25,
    },
    h3: {
        fontSize: "2.441rem",
        fontWeight: 600,
        lineHeight: 1.3,
    },
    h4: {
        fontSize: "1.953rem",
        fontWeight: 500,
        lineHeight: 1.35,
    },
    h5: {
        fontSize: "1.563rem",
        fontWeight: 400,
        lineHeight: 1.4,
    },
    h6: {
        fontSize: "1.25rem",
        fontWeight: 300,
        lineHeight: 1.5,
    },
    body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.6,
    },
    body2: {
        fontSize: "0.87rem",
        fontWeight: 400,
        lineHeight: 1.6,
    },
    subtitle1: {
        fontSize: "1.22rem",
        fontWeight: 300,
        lineHeight: 1.6,
    },
    subtitle2: {
        fontSize: "1.12rem",
        fontWeight: 300,
        lineHeight: 1.6,
    },
    caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.4,
    },
    overline: {
        fontSize: "0.87rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        lineHeight: 1.6,
        textTransform: "uppercase",
    },
    button: {
        fontWeight: 300,
        lineHeight: 1.75,
        textTransform: "uppercase",
    },
};

// Configurações globais do tema
const globalTheme = {
    spacing: spacing,
    breakpoints: breakpoints,
    typography: typography,
    custom: {
        color: {
            darkGreen: '#072b31',
        },
    },
}

// Tema claro
export const lightTheme = createTheme({
    ...globalTheme,
    palette: {
        mode: 'light',
        primary: {
            main: '#E2E868',
        },
        secondary: {
            main: '#168497',
        },
        background: {
            default: '#fefff1',
            paper: '#fffffd',
        },
    },
});

// Tema escuro
export const darkTheme = createTheme({
    ...globalTheme,
    palette: {
        mode: 'dark',
        primary: {
            main: '#C42847',
        },
        secondary: {
            main: '#2847C4',
        },
        background: {
            default: '#000011',
            paper: '#000022',
        },
        /*
        text: {
            primary: '#f9f9f9',
            secondary: '#f0f0f0',
        },
        */
    },
});