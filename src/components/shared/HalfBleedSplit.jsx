import { Box, Container } from "@mui/material";

/**
 * HalfBleedSplit 
 *
 * Corrige alinhamento do conteúdo para bater EXACT com o <Container> global,
 * mesmo quando a imagem ocupa X% do viewport em half-bleed.
 *
 * Ideia: a imagem é posicionada ABSOLUTA (half-bleed) e o conteúdo fica
 * dentro de um <Container>. Para não sobrepor, usamos um "spacer" dentro
 * do Container cuja largura é calculada em função do viewport e do maxWidth
 * do container, garantindo o mesmo alinhamento do header/menu.
 *
 * Props:
 * - image (string): URL da imagem (obrigatória)
 * - imagePosition ("left" | "right"): default "left"
 * - imagePercent (number): 30–80 recomendado. default: 50 (porcentagem do *viewport*)
 * - minHeight (string|number): altura mínima do bloco. default: "70vh"
 * - containerMaxWidth ("xs"|"sm"|"md"|"lg"|"xl"|false): default: "lg"
 * - contentAlign ("start"|"center"|"end"): alinhamento vertical. default: "center"
 * - gap (number|string): padding lateral extra do conteúdo. default: 0
 * - overlay (string): CSS do overlay da imagem (ex: "linear-gradient(...)")
 * - sx: estilos extras
 * - children: conteúdo
 *
 * Responsivo:
 * - Em md- (telas menores), empilha: imagem 100% em cima, conteúdo abaixo.
 */
export default function HalfBleedSplit({
    image,
    imagePosition = "left",
    imagePercent = 50,
    minHeight = "70vh",
    minMobileHeight = "42vh",
    containerMaxWidth = "lg",
    contentAlign = "center",
    backgroundSize = "cover",
    gap = 0,
    overlay,
    sx = {},
    children,
}) {
    // Pegamos o maior valor entre (30, o número passado via param e 80)
    const imagePercentage = Math.max(30, Math.min(Number(imagePercent) || 50, 80));
    const isRight = imagePosition === "right";

    // Função que gera a largura do espaçador para alinhar com o Container global
    // width = max(0, (vw * imagePercentage) - gutterEsquerdoDoContainer)
    // onde gutter = (vw - containerMaxWidth)/2
    const spacerWidth = (theme) => {
        const maxWidth = containerMaxWidth ? theme.breakpoints.values[containerMaxWidth] : 0;
        // usa CSS calc + max() para resolver no browser e ficar reativo
        const widthExpression = `max(0px, calc((100vw * ${imagePercentage} / 100) - ((100vw - ${maxWidth}px) / 2)))`;
        return { width: widthExpression };
    };

    return (
        <Box
            className="HalfBleedSplit"
            sx={(theme) => ({
                position: "relative",
                width: "100%",
                minHeight,
                // mobile: empilha
                [theme.breakpoints.down("md")]: {
                    display: "block",
                },
                ...((typeof sx === "function") ? sx(theme) : sx),
            })}
        >
            {/* Image bleed */}
            <Box
                aria-hidden
                sx={(theme) => ({
                    position: { xs: "relative", md: "absolute" },
                    inset: { md: 0 },
                    left: { md: isRight ? "auto" : 0 },
                    right: { md: isRight ? 0 : "auto" },
                    height: { xs: minMobileHeight, md: "100%" },
                    width: { xs: "100%", md: `calc(100vw * ${imagePercentage} / 100)` },
                    backgroundImage: overlay
                        ? `${overlay}, url(${image})`
                        : `url(${image})`,
                    backgroundSize: backgroundSize,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: { xs: 0, md: isRight ? "0 0 0 24px" : "0 24px 0 0" },
                    overflow: "hidden",
                })}
            />

            {/* Conteúdo containerizado e alinhado ao grid global */}
            <Container
                maxWidth={containerMaxWidth}
                sx={(theme) => ({
                    position: "relative",
                    zIndex: 1,
                    minHeight: { xs: "auto", md: typeof minHeight === "number" ? `${minHeight}px` : minHeight },
                    display: "flex",
                    alignItems:
                        contentAlign === "start"
                            ? "flex-start"
                            : contentAlign === "end"
                                ? "flex-end"
                                : "center",
                    py: { xs: 4, md: 6 },
                })}
            >
                {/* Spacer empurra o conteúdo para a borda da imagem e mantém alinhado ao Container global */}
                <Box
                    sx={(theme) => ({
                        display: { xs: "none", md: "block" },
                        ...spacerWidth(theme),
                        // Se a imagem estiver à direita, o spacer vai para o outro lado
                        order: isRight ? 1 : 0,
                        flex: "0 0 auto",
                    })}
                />

                {/* Área de conteúdo */}
                <Box
                    sx={{
                        order: isRight ? 0 : 1,
                        flex: 1,
                        px: { xs: 0, md: gap },
                    }}
                >
                    {children}
                </Box>
            </Container>
        </Box>
    );
}

// Exemplo de uso
// <HalfBleedSplit
//   image="/imgs/hero.jpg"
//   imagePosition="left" // ou "right"
//   imagePercent={55}
//   minHeight="80vh"
//   containerMaxWidth="lg"
//   overlay="linear-gradient(0deg, rgba(0,0,0,.35), rgba(0,0,0,.35))"
// >
//   <Typography variant="overline" color="text.secondary">NEM EXCESSO, NEM ESCASSEZ</Typography>
//   <Typography variant="h2" sx={{ mt: 1 }}>Lagom é equilíbrio</Typography>
//   <Typography sx={{ mt: 2, maxWidth: 560 }}>
//     Texto explicativo aqui...
//   </Typography>
//   <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
//     <Button variant="contained">Ação</Button>
//     <Button variant="text">Saiba mais</Button>
//   </Stack>
// </HalfBleedSplit>