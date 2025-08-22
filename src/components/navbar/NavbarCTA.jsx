import React from "react";
import { Stack } from "@mui/material";
import { WhatsApp, PhoneRounded } from "@mui/icons-material";
import CTAButton from "../shared/CTAButton";
import { whatsappInfo } from "../../config/contactData";

const NavbarCTA = () => {
    return (
        <Stack direction="row" spacing={1}>
            <CTAButton
                variant="contained"
                color="primary"
                icon={<WhatsApp />}
                iconPosition="start"
                textAlignment="left"
                subtitle="Contate-nos"
                title={whatsappInfo.phone}
                phone={whatsappInfo.normalizedPhone}
                message={whatsappInfo.defaultMessage}
                target="_blank"
            />
        </Stack>
    );
}

export default NavbarCTA;