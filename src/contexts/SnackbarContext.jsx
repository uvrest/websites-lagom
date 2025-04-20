import { createContext, useContext, useState, useCallback } from "react";
import { Snackbar, Alert } from "@mui/material";

// Criamos o contexto
const SnackbarContext = createContext();

export const useSnackbar = () => {
    return useContext(SnackbarContext);
};

const SnackbarProvider = ({ children }) => {

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "info",
    });

    // Função para exibir o Snackbar
    const showSnackbar = useCallback((message, severity = "info") => {
        setSnackbar({ open: true, message, severity });
    }, []);

    // Função para fechar o Snackbar
    const closeSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={closeSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={closeSnackbar} severity={snackbar.severity} variant="filled">
                    {snackbar.message}
                </Alert>
            </Snackbar>

            {children}
        </SnackbarContext.Provider>
    );
};

export default SnackbarProvider;