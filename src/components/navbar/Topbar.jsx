import { Box, Stack, IconButton, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { PhoneRounded, WhatsApp, EmailRounded, Instagram } from "@mui/icons-material";
import ToggleThemeSwitch from "../shared/ToggleThemeSwitch";
import { getContrastTextFor } from "../../utils/themeUtils";
import ContactItem from "../shared/ContactItem";

const contactItems = [
    { icon: <WhatsApp />, text: "(47) 99607-0223" },
    { icon: <EmailRounded />, text: "contato@lagomengenharia.com.br" },
];

const socialMediaItems = [
    { icon: <Instagram />, href: "https://www.instagram.com/lagom.engenharia/" },
];

const SocialMediaItem = ({ icon, href, target = "_blank" }) => (
    <IconButton
        href={href}
        target={target}
        sx={(theme) => ({
            color: getContrastTextFor(theme, theme.palette.primary.dark),
        })}
    >
        {icon}
    </IconButton>
);

const TopBar = () => {

    const theme = useTheme();
    const color = getContrastTextFor(theme, theme.palette.primary.dark);

    return (
        <Box
            alignItems="center"
            flexWrap="wrap"
            zIndex={1}
            py={{ xs: 2, md: 0 }}
            gap={2}
            backgroundColor={{ backgroundColor: theme.palette.primary.main }}
        >
            <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>

                <Stack direction="row" spacing={2}>
                    {contactItems.map((item, index) => (
                        <ContactItem
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            color={color}
                        />
                    ))}
                </Stack>

                <Box display="flex" sx={{ marginLeft: "auto" }}>

                    {/*}
                    <ToggleThemeSwitch />
                    {*/}

                    <Stack direction="row" spacing={1}>
                        {socialMediaItems.map((item, index) => (
                            <SocialMediaItem key={index} icon={item.icon} href={item.href} />
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};


export default TopBar;
