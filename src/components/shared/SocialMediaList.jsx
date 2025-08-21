import { Stack } from "@mui/material";
import { Facebook, Instagram, Pinterest, Twitter, LinkedIn } from "@mui/icons-material";
import StyledIconButton from "./StyledIconButton";

const SocialMediaList = ({ direction = "row", spacing = 1, sx }) => {
    return (
        <Stack direction={direction} spacing={spacing} sx={{ ...sx }}>
            <StyledIconButton icon={Instagram} href="https://www.instagram.com/lagom.engenharia/" />
            <StyledIconButton icon={LinkedIn} href="https://www.linkedin.com/company/lagomengenharia/" />
        </Stack >
    )
}

export default SocialMediaList;