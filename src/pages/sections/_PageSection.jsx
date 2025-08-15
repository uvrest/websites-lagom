// components/PageSection.jsx
import { Box, Container, Typography } from "@mui/material";
import { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { resolveThemeColor, isValidRGBA, isValidHexColor } from "../../utils/colorUtils";

/**
 * Props principais:
 * - bgColor: "paper" | "primary" | "#fff" | "rgba(...)" (default: "paper")
 * - bgImage: "/textures/noise.png" | "https://..." (opcional)
 * - overlayColor: "#000" | "rgba(...)" | "primaryDark" (opcional, usado sobre a imagem)
 * - overlayOpacity: 0..1 (se overlayColor vier em hex ou token do tema)
 * - bgBlend: CSS blend-mode (ex: "multiply", "overlay") quando image+overlay coexistem
 * - py: { xs: 8, md: 12 } (padding vertical, default igual ao seu)
 * - container: bool (default true)
 * - maxWidth: "lg" (default)
 * - header: { title, subtitle, helper, align: "left"|"center"|"right" } (opcional)
 * - sx: objeto (pode sobrescrever tudo)
 */
const PageSection = ({
    bgColor = "paper",
    bgImage,
    overlayColor,
    overlayOpacity,
    bgBlend = "normal",
    bgRepeat = "repeat",
    bgSize = "auto",
    bgPosition = "center",
    py = { xs: 8, md: 12 },
    container = true,
    maxWidth = "lg",
    header, // { title, subtitle, helper, align }
    sx = {},
    id,
    children,
    ...rest
}) => {
    const theme = useTheme();

    // Resolve background color
    const backgroundColor = useMemo(
        () => resolveThemeColor(bgColor, theme),
        [bgColor, theme]
    );

    // Resolve overlay color (pode ser token do tema)
    const resolvedOverlay = useMemo(() => {
        if (!overlayColor) return null;

        let c = overlayColor;
        if (!isValidHexColor(c) && !isValidRGBA(c)) {
            c = resolveThemeColor(c, theme);
        }

        // aplica opacity se for hex e a prop foi informada
        if (isValidHexColor(c) && typeof overlayOpacity === "number") {
            const h = c.replace("#", "");
            const short = h.length === 3;
            const r = parseInt(short ? h[0] + h[0] : h.slice(0, 2), 16);
            const g = parseInt(short ? h[1] + h[1] : h.slice(2, 4), 16);
            const b = parseInt(short ? h[2] + h[2] : h.slice(4, 6), 16);
            return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, overlayOpacity))})`;
        }

        return c;
    }, [overlayColor, overlayOpacity, theme]);

    // Header alignment
    const headerAlign = header?.align ?? "left";
    const textAlign =
        headerAlign === "center" ? "center" : headerAlign === "right" ? "right" : "left";

    // ::before overlay styles (simples e legível)
    const overlayStyles =
        bgImage || resolvedOverlay
            ? {
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 0,
                    // camadas: primeiro a cor (via linear-gradient), depois a imagem
                    backgroundImage: [
                        resolvedOverlay ? `linear-gradient(${resolvedOverlay}, ${resolvedOverlay})` : null,
                        bgImage ? `url(${bgImage})` : null,
                    ]
                        .filter(Boolean)
                        .join(", "),
                    backgroundBlendMode:
                        resolvedOverlay && bgImage ? bgBlend : "normal",
                    backgroundRepeat: bgRepeat,
                    backgroundSize: bgSize,
                    backgroundPosition: bgPosition,
                },
                // garante que o conteúdo fique acima do overlay
                "& > .PageSection-content": { position: "relative", zIndex: 1 },
            }
            : null;

    const ContentWrapper = container ? Container : Box;

    return (
        <Box
            component="section"
            id={id}
            sx={{
                py,
                backgroundColor,
                ...(overlayStyles || {}),
                ...sx,
            }}
            {...rest}
        >
            <ContentWrapper maxWidth={container ? maxWidth : undefined} className="PageSection-content">

                {/* Header opcional */}
                {header && (header.title || header.subtitle || header.helper) ? (
                    <Box sx={{ textAlign, mb: { xs: 4, md: 6 } }}>
                        {header.title && (
                            <Typography variant="h3" component="h2" gutterBottom>
                                {header.title}
                            </Typography>
                        )}
                        {header.subtitle && (
                            <Typography variant="h5" color="text.secondary" gutterBottom>
                                {header.subtitle}
                            </Typography>
                        )}
                        {header.helper && (
                            <Typography variant="body1" color="text.secondary">
                                {header.helper}
                            </Typography>
                        )}
                    </Box>
                ) : null}

                {children}
            </ContentWrapper>
        </Box>
    );
};

export default PageSection;