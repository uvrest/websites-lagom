import { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { resolveThemeColor } from "./core";

export const useResolveThemeColor = () => {

    const theme = useTheme();

    // (Opcional) se quisermos memoizar algo do theme pra muitas chamadas
    const themedResolver = useMemo(() => {
        return (background) => resolveThemeColor(background, theme);
    }, [theme]);

    return themedResolver;
};