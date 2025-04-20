import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router";

const NotFoundPage = () => {
    return (
        <Box
            textAlign="center"
            py={10}
            px={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="h2" component="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
                Página não encontrada.
            </Typography>
            <Button
                component={RouterLink}
                to="/"
                variant="contained"
                sx={{ mt: 4 }}
            >
                Voltar para a página inicial
            </Button>
        </Box>
    );
};

export default NotFoundPage;
