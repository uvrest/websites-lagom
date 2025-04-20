import { Box, Collapse, Divider, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router";

const menuItems = [
    { label: "Início", path: "/" },
    { label: "Empresa", path: "/empresa" },
    { label: "Serviços", path: "/servicos" },
    { label: "Contato", path: "/contato" },
];

const MobileMenuCollapse = ({ open, onClose, pathname }) => {

    const isActive = (path) => pathname === path;

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "background.paper",
                    pb: 2,
                    pt: 1,
                }}
            >
                <Box
                    sx={{
                        width: "80%",
                        mx: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        py: 1,
                    }}
                >
                    {menuItems.map((item, index) => (
                        <Box key={item.path} sx={{ width: "100%" }}>
                            <MenuItem
                                onClick={onClose}
                                component={RouterLink}
                                to={item.path}
                                sx={{
                                    color: isActive(item.path) ? "#fff" : "primary.main",
                                    backgroundColor: isActive(item.path) ? "primary.main" : "transparent",
                                    fontWeight: 700,
                                    width: "100%",
                                    justifyContent: "flex-start",
                                    py: 1.5,
                                    borderRadius: "8px",
                                    "&:hover": {
                                        backgroundColor: "primary.main",
                                        color: "#fff",
                                    },
                                }}
                            >
                                {item.label}
                            </MenuItem>
                            {index < menuItems.length - 1 && (
                                <Divider sx={{ width: "100%", my: 0.5 }} />
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Collapse>
    );
};

export default MobileMenuCollapse;