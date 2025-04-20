import { Box, Grid, Typography, Stack } from "@mui/material";
import { BoltRounded, VerifiedUserRounded, GrassRounded } from "@mui/icons-material";
import PageSectionTitle from "./_PageSectionTitle";
import FeatureListCard from "../../components/cards/FeatureListCard";
import whyUsImg from "../../assets/images/why-us/plumber-1.png";

const features = [
    {
        icon: BoltRounded,
        title: "Atendimento Rápido",
        description: "Chegamos em poucos minutos em qualquer região de Porto Alegre e Região Metropolitana.",
    },
    {
        icon: VerifiedUserRounded,
        title: "Profissionais Confiáveis",
        description: "Equipe com uniforme, crachá e treinamento técnico especializado.",
    },
    {
        icon: GrassRounded,
        title: "Soluções Sustentáveis",
        description: "Uso de produtos biodegradáveis e descarte ambientalmente correto de dejetos; seguindo todas as normas vigentes.",
    },
];

const WhyUsSection = () => {
    return (
        <Grid container spacing={1}>

            {/* Texto */}
            <Grid size={{ xs: 12, md: 7 }}>

                <Box height="100%" py={12}>

                    <Box mb={3}>
                        <PageSectionTitle
                            overline="Por que escolher a Ecoportus?"
                            title="Soluções práticas com quem entende do assunto"
                        />
                        <Typography variant="body1" color="text.secondary">
                            Atuamos com foco total em resolver o seu problema da forma mais rápida, segura e eficiente possível.
                            Da primeira conversa até a execução do serviço, você será atendido por uma equipe preparada, com equipamentos profissionais
                            e respeito ao seu tempo e espaço.
                        </Typography>
                    </Box>

                    <Stack spacing={3}>
                        {features.map((item, idx) => (
                            <FeatureListCard key={idx} {...item} />
                        ))}
                    </Stack>

                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
                <Box height="100%" position="relative">
                    <Box
                        component="img"
                        src={whyUsImg}
                        alt="Por que escolher a Ecoportus?"
                        sx={{
                            maxHeight: "105%",
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            bottom: 0,
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default WhyUsSection;
