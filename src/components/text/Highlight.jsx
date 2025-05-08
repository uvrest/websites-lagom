import { Box } from "@mui/material";

/**
 * Componente para destacar palavras com cor personalizada.
 *
 * Props:
 * - `color`: aceita uma cor do tema MUI, ex: `"primary.main"`, `"secondary.light"`, ou até códigos hex.
 * - `children`: conteúdo a ser destacado.
 */
const Highlight = ({ color = "primary.main", children }) => {
    return (
        <Box component="span" sx={{ color: color, fontWeight: 'inherit' }}>
            {children}
        </Box>
    );
};

export default Highlight;
