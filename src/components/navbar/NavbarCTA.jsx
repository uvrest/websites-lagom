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
                title="(47) 99131-5699"
                phone="47991315699"
                message="Olá, gostaria de tirar algumas dúvidas a respeito dos serviços prestados pela Lagom."
                target="_blank"
            />
        </Stack>
    );
}

export default NavbarCTA;