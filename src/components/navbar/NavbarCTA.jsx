import React from "react";
import { Stack } from "@mui/material";
import { WhatsApp, PhoneRounded } from "@mui/icons-material";
import CTAButton from "../shared/CTAButton";

const NavbarCTA = () => {
    return (
        <Stack direction="row" spacing={1}>
            <CTAButton
                variant="contained"
                color="success"
                icon={<WhatsApp />}
                iconPosition="end"
                textAlignment="right"
                subtitle="Whatsapp"
                title="Orçamento grátis"
                target="_blank"
            />

            <CTAButton
                variant="contained"
                color="primary"
                icon={<PhoneRounded />}
                iconPosition="end"
                textAlignment="right"
                subtitle="Contate-nos"
                title="(51) 99257-3402"
                target="_blank"
            />
        </Stack>
    );
}

export default NavbarCTA;