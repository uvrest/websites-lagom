import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { whatsappInfo } from "../../config/contactData";

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

    return (
        <Button
            component="a"
            href={whatsappInfo.linkSrc}
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