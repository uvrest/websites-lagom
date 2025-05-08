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
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: `"Poppins", sans-serif`,
    h1: { fontSize: "3.0625rem", fontWeight: 700 },
    h2: { fontSize: "2.4375rem", fontWeight: 600 },
    h3: { fontSize: "1.9375rem", fontWeight: 600 },
    h4: { fontSize: "1.5625rem", fontWeight: 500 },
    h5: { fontSize: "1.25rem", fontWeight: 400 },
    h6: { fontSize: "1.125rem", fontWeight: 300 },
    subtitle1: { fontSize: "1.225rem", fontWeight: 300, lineHeight: 1.6, },
    body1: { fontSize: "1rem", fontWeight: 400 }, // 16px
    body2: { fontSize: "0.875rem", fontWeight: 400 }, // 14px
    caption: { fontSize: "0.75rem", fontWeight: 400 }, // 12px
    button: { fontSize: "0.875rem", fontWeight: 500 }, // 14px
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
            main: '#F9900A',
        },
        background: {
            default: '#e0f8da',
            paper: '#fafef9',
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