import React, { useState } from "react";
import { useTheme } from '@emotion/react';
import { useLocation } from "react-router";
import { Box, AppBar, Container, Toolbar, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import TopBar from "./Topbar";
import RenderLogo from "./RenderLogo";
import NavbarCTA from "./NavbarCTA";
import DesktopMenu from "./DesktopMenu";
import MobileMenuCollapse from "./MobileMenuCollapse";

const Navbar = () => {

    const theme = useTheme();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => setMenuOpen((prev) => !prev);

    return (
        <React.Fragment>

            <TopBar />

            <AppBar
                position="sticky"
                sx={{
                    top: 0,
                    zIndex: 999,
                    minHeight: "auto",
                    py: { xs: 2, md: 2 },
                    backgroundColor: theme.custom.color.darkGreen,
                    boxShadow: "none",
                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                }}
            >
                <Container maxWidth="xl">

                    <Toolbar disableGutters>

                        <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">

                            {/** Navbar logo */}
                            <Box>
                                <RenderLogo />
                            </Box>

                            {/** Navbar menu */}
                            <Box sx={{ display: { xs: "none", md: "flex" }, }}>
                                <DesktopMenu pathname={location.pathname} onCloseMobile={handleMenuToggle} />
                            </Box>

                            {/** Navbar actions */}
                            <Box>
                                <NavbarCTA />
                            </Box>

                            {/** Hamburger menu */}
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenuToggle}
                                sx={{
                                    display: { xs: "flex", md: "none" },
                                    backgroundColor: theme.palette.primary.main,
                                    "&:hover": { backgroundColor: theme.palette.primary.dark },
                                    ml: "auto",
                                    borderRadius: 1,
                                }}
                            >
                                <Menu sx={{ color: "white" }} />
                            </IconButton>

                        </Box>

                    </Toolbar>

                    <MobileMenuCollapse open={menuOpen} onClose={handleMenuToggle} pathname={location.pathname} />

                </Container>
            </AppBar>

        </React.Fragment>
    )
}

export default Navbar;