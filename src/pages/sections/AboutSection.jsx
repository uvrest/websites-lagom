import { Box, Grid, Typography } from "@mui/material";
import PageSectionTitle from "./_PageSectionTitle";
import aboutImg1 from "../../assets/images/about/about3.jpg";
import aboutImg2 from "../../assets/images/about/about1.webp";

const AboutSection = () => {
    return (
        <Grid container spacing={4} alignItems="center">

            {/* Imagens */}
            <Grid size={{ xs: 12, md: 7 }}>
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Box
                        component="img"
                        src={aboutImg1}
                        alt="Sobre a empresa"
                        sx={{
                            width: "100%",
                            maxWidth: "90%",
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />
                    <Box
                        component="img"
                        src={aboutImg2}
                        alt="Equipe Ecoportus"
                        sx={{
                            position: "absolute",
                            left: 0,
                            width: "100%",
                            maxWidth: 380,
                            borderRadius: 2,
                            boxShadow: 2,
                            bottom: 28,
                        }}
                    />
                </Box>
            </Grid>

            {/* Texto */}
            <Grid size={{ xs: 12, md: 5 }}>

                <PageSectionTitle
                    overline="Sobre a Ecoportus"
                    title="Tradição e Compromisso com a Qualidade Ecoportus"
                />

                <Typography variant="body1" color="text.secondary" mb={2}>
                    A Ecoportus oferece soluções completas em desentupimentos, reparos hidráulicos,
                    dedetização e controle ambiental. Atuamos com responsabilidade, tecnologia e foco
                    na satisfação do cliente. Com preços competitivos e atraentes.
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    Nossa equipe é formada por profissionais altamente qualificados, prontos para atender
                    de forma rápida e eficiente, respeitando normas técnicas e ambientais.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default AboutSection;
