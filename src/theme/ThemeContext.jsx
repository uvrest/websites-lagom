import { createContext, useState, useContext } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./themes";

// Criamos o contexto
const ThemeContext = createContext();

// Hook para utilizar o tema
export const useThemeContext = () => {

    if (!ThemeContext) {
        console.warn("Este componente não está no escopo de ThemeContext.");
        return null;
    }

    return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {

    // Verifica se há um modo salvo no localStorage ou usa a preferência do sistema
    const getInitialTheme = () => {

        if (typeof window === "undefined") return "light";

        const stored = localStorage.getItem("themeMode");
        if (stored === "light" || stored === "dark") return stored;

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    // Estado inicial com cache no localStorage e fallback no sistema
    const [themeMode, setThemeMode] = useState(getInitialTheme);

    // Função para armazenar no localStorage
    const setNewLocalStorageThemeMode = (newMode) => {
        localStorage.setItem("themeMode", newMode);
    };

    // Alternância de tema (Light/Dark)
    const toggleTheme = () => {
        setThemeMode((prevMode) => {
            const newMode = prevMode === "light" ? "dark" : "light";
            setNewLocalStorageThemeMode(newMode);
            return newMode;
        });
    };

    // Define qual tema será usado
    //const theme = themeMode === "light" ? lightTheme : darkTheme;

    //Force Light Theme in this Project
    const theme = lightTheme;

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );

}

export default ThemeProvider;