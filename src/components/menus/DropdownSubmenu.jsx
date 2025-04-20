import { Paper, Stack, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router";

const DropdownSubmenu = ({ items = [], minWidth = 200 }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                minWidth: minWidth,
                backgroundColor: "background.paper",
            }}
        >
            <Stack spacing={1}>
                {items.map(({ label, to, icon: Icon }, idx) => (
                    <Box
                        key={to + idx}
                        component={RouterLink}
                        to={to}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "text.primary",
                            textDecoration: "none",
                            fontWeight: 500,
                            transition: "color 0.2s ease-in-out",
                            "&:hover": {
                                color: "secondary.main",
                            },
                        }}
                    >
                        {Icon && <Box component={Icon} sx={{ fontSize: 18 }} />}
                        <Typography variant="body2">{label}</Typography>
                    </Box>
                ))}
            </Stack>
        </Paper>
    );
};

export default DropdownSubmenu;
