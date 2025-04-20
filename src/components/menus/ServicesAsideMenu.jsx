import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router";
import { ServicesMenuData } from "../../config/FooterMenuData";

const ServicesAsideMenu = () => {

    const { pathname } = useLocation();

    return (
        <Box component="aside" sx={{ position: "sticky", top: 32 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                Nossos Serviços
            </Typography>

            <List disablePadding>
                {ServicesMenuData.map(({ label, to }) => {
                    const isActive = pathname === to;

                    return (
                        <ListItem key={to} disablePadding disableGutters>
                            <ListItemButton
                                component={RouterLink}
                                to={to}
                                selected={isActive}
                                sx={(theme) => ({
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    typography: "body2",
                                    fontWeight: isActive ? 700 : 500,
                                    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                                    backgroundColor: isActive ? theme.palette.action.selected : "transparent",
                                    "&:hover": {
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                })}
                            >
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default ServicesAsideMenu;
