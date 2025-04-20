import { Stack } from "@mui/material";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import StyledIconButton from "./StyledIconButton";

const SocialMediaList = ({ direction = "row", spacing = 1, sx }) => {
    return (
        <Stack direction={direction} spacing={spacing} sx={{ ...sx }}>
            <StyledIconButton icon={Instagram} href="https://instagram.com" />
            <StyledIconButton icon={Facebook} href="https://facebook.com" />
            <StyledIconButton icon={Pinterest} href="https://pinterest.com" />
        </Stack >
    )
}

export default SocialMediaList;