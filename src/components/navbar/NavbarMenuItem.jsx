import { Box, Link } from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { Link as RouterLink } from "react-router";

const NavbarMenuItem = ({ label, to, isActive, isSubmenuOpen, hasSubmenu = false }) => (
    <Link
        component={RouterLink}
        variant="body1"
        underline="none"
        to={to}
        sx={(theme) => ({
            p: 1,
            fontWeight: 600,
            textTransform: "capitalize",
            color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
            transition: "color 0.2s ease-in-out",
            "&:hover": {
                color: theme.palette.primary.main,
            },
        })}
    >
        <Box display="flex" gap={0.5}>
            {label}
            {hasSubmenu &&
                <KeyboardArrowDownRounded
                    sx={{
                        transform: isSubmenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: 'transform 0.2s ease-in-out',
                    }}
                />
            }
        </Box>
    </Link>
);


export default NavbarMenuItem;
