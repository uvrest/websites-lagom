import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import FaqAccordion from "../../components/accordions/FaqAccordion";

const faqItems = [
    {
        question: "Atendem finais de semana e feriados?",
        answer: "Sim! Temos atendimento 24h, todos os dias da semana, incluindo sábados, domingos e feriados.",
    },
    {
        question: "Os produtos utilizados são seguros?",
        answer: "Todos os produtos são certificados, seguros para humanos e pets, e aprovados pelos órgãos reguladores.",
    },
    {
        question: "Preciso sair de casa durante o serviço?",
        answer: "Na maioria dos casos, não. Nossa equipe trabalha com segurança, higiene e o mínimo de incômodo possível.",
    },
    {
        question: "Qual o prazo para atendimento?",
        answer: "Nosso tempo médio de chegada é entre 30 a 60 minutos após a confirmação, dependendo da região.",
    },
];

const FaqSection = () => {
    return (
        <>
            <Box textAlign="center" mb={6} sx={{ maxWidth: "60%", mx: "auto" }}>
                <Typography variant="overline" color="secondary.main" fontWeight={600}>
                    Dúvidas Frequentes
                </Typography>
                <Typography variant="h2" fontWeight={700}>
                    Ainda com perguntas? Nós respondemos
                </Typography>
            </Box>

            <Grid container>
                <Grid size={{ xs: "grow", md: 8 }} offset={{ md: 2 }}>
                    <Stack spacing={2}>
                        {faqItems.map((item, idx) => (
                            <FaqAccordion key={idx} {...item} />
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default FaqSection;
