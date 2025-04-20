import { Box, Stack, ClickAwayListener } from "@mui/material";
import { useState } from "react";
import { NavbarMenuData } from "../../config/NavbarMenuData";
import NavbarMenuItem from "./NavbarMenuItem";

const DesktopMenu = ({ pathname }) => {

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <Stack direction="row" spacing={1}>

            {NavbarMenuData.map(({ label, to, renderSubmenu, openMode = "click" }, index) => {

                const isActive = pathname === to;
                const isOpen = openIndex === index;

                const eventHandlers = openMode === "hover"
                    ? {
                        onMouseEnter: () => setOpenIndex(index),
                        onMouseLeave: () => setOpenIndex(null),
                    }
                    : {
                        onClick: () => setOpenIndex(isOpen ? null : index),
                    };

                return (
                    <Box
                        key={to}
                        sx={{ position: "relative", display: "flex", flexDirection: "column" }}
                        {...eventHandlers}
                    >

                        <NavbarMenuItem
                            label={label}
                            to={to}
                            hasSubmenu={typeof renderSubmenu === 'function'}
                            isSubmenuOpen={isOpen}
                            isActive={isActive}
                        />

                        {renderSubmenu && isOpen && (
                            <ClickAwayListener onClickAway={() => setOpenIndex(null)}>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "100%",
                                        left: 0,
                                        mt: 0, // ⚠️ Evitar mt positivo aqui se openMode for "hover" — causa gap no hover
                                        zIndex: 10,
                                    }}
                                >
                                    {renderSubmenu()}
                                </Box>
                            </ClickAwayListener>
                        )}

                    </Box>
                );
            })}

        </Stack>
    );
};

export default DesktopMenu;
