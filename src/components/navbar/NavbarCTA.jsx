import React from "react";
import { Stack } from "@mui/material";
import { WhatsApp, PhoneRounded } from "@mui/icons-material";
import CTAButton from "../shared/CTAButton";

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
                title="(47) 99607-0223"
                target="_blank"
            />
        </Stack>
    );
}

export default NavbarCTA;