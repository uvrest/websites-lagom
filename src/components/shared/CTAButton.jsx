import React from "react";
import { Box, Button, Typography } from "@mui/material";

const normalizePhone = (raw, defaultCountry = "55") => {
    if (!raw) return "";
    let d = String(raw).replace(/\D/g, ""); // só dígitos
    d = d.replace(/^0+/, "");               // remove zeros à esquerda
    if (!d.startsWith(defaultCountry)) d = defaultCountry + d; // BR por padrão
    return d;
};

const buildWhatsAppLink = (phone, message) => {
    const num = normalizePhone(phone);
    const text = encodeURIComponent(message || "");
    return num ? `https://wa.me/${num}?text=${text}` : undefined;
};

const CTAButton = ({
    variant = "contained",
    color = "primary",
    icon,
    iconPosition = "start",
    textAlignment = "left",
    subtitle,
    title,
    phone,
    message,
    sx,
    ...rest
}) => {

    // Aplica style direto no ícone para garantir fontSize correto
    const styledIcon = icon ? React.cloneElement(icon, { style: { fontSize: 24 } }) : null;

    const href = buildWhatsAppLink(
        phone ?? title,
        message ?? "Olá, gostaria de tirar algumas dúvidas a respeito dos serviços prestados pela Lagom."
    );

    return (
        <Button
            component="a"
            href={href}
            target={rest.target ?? "_blank"}
            rel="noopener noreferrer"
            variant={variant}
            color={color}
            {...(iconPosition === "end" ? { endIcon: styledIcon } : { startIcon: styledIcon })}
            sx={{ py: 1.5, width: "auto", textAlign: textAlignment, ...sx }}
            {...rest}
        >
            <Box sx={{ textAlign: textAlignment }}>
                <Typography variant="body2" sx={{ fontSize: 11, textTransform: "uppercase" }} color="inherit">
                    {subtitle}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, textTransform: "capitalize" }} color="inherit">
                    {title}
                </Typography>
            </Box>
        </Button>
    );
};

export default CTAButton;