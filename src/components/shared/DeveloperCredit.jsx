import React from "react";
import { Box, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

/**
 * DeveloperCredit
 * Rodapé "Desenvolvido por: <nome>" com link (WhatsApp por padrão).
 *
 * Props:
 * - name: string (default: "Gabriel Coelho")
 * - whatsappNumber: string | number (default: "5551994426690"). Aceita formatos com espaços/()+-.
 * - message: string (mensagem pré-preenchida do WhatsApp)
 * - hrefOverride: string (se quiser usar um link custom, ex: site/portfolio). Se passado, ignora o WhatsApp.
 * - showIcon: boolean (default: true)
 * - align: "left" | "center" | "right" (default: "right")
 * - color: MUI color string (default: "secondary")
 * - gap: number | string (espaço entre o texto e o link) (default: 0.5)
 * - sx: estilos extras pro wrapper
 *
 * Uso básico:
 * <DeveloperCredit />
 * <DeveloperCredit whatsappNumber="55 51 99442-6690" />
 * <DeveloperCredit hrefOverride="https://seu-portfolio.com" />
 */
export default function DeveloperCredit({
    name = "Gabriel Coelho",
    whatsappNumber = "5551994426690",
    message = "Olá, Gabriel. Vi um site que você desenvolveu e gostaria de saber mais.",
    hrefOverride,
    showIcon = true,
    align = "right",
    color = "secondary",
    gap = 0.5,
    sx = {},
}) {
    const getWhatsappLink = (rawNumber, text) => {
        const digits = String(rawNumber).replace(/\D+/g, "");
        if (!digits) return null;
        const encoded = encodeURIComponent(text || "");
        return `https://wa.me/${digits}${encoded ? `?text=${encoded}` : ""}`;
    };

    const href = hrefOverride || getWhatsappLink(whatsappNumber, message);

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", md: alignToJustify(align) },
                alignItems: "center",
                gap,
                ...sx,
            }}
        >
            <Box component="span" sx={{ opacity: 0.9 }}>
                Desenvolvido por:
            </Box>
            {href ? (
                <Link
                    color={color}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        opacity: 1,
                    }}
                >
                    {showIcon && <WhatsAppIcon fontSize="small" />} {name}
                </Link>
            ) : (
                <Box component="span" sx={{ fontWeight: 600 }}>
                    {name}
                </Box>
            )}
        </Box>
    );
}

function alignToJustify(pos) {
    switch (pos) {
        case "left":
            return "flex-start";
        case "center":
            return "center";
        case "right":
        default:
            return "flex-end";
    }
}

// Exemplo de uso no rodapé
// <Box py={1} textAlign="center" fontSize={14} opacity={0.8} bgcolor="primary.main">
//   <Container>
//     <Grid container spacing={2} alignItems="center">
//       <Grid size={{ xs: 12, md: 6 }}>
//         © {new Date().getFullYear()} Lagom - Engenharia Ambiental. Todos os direitos reservados.
//       </Grid>
//       <Grid size={{ xs: 12, md: 6 }}>
//         <DeveloperCredit align="right" />
//       </Grid>
//     </Grid>
//   </Container>
// </Box>
