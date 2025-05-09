import { Box, Grid, Stack } from "@mui/material";
import PageSectionTitle from "./_PageSectionTitle";
import FaqAccordion from "../../components/accordions/FaqAccordion";
import whyUsImg from "../../assets/images/why-us/fact-image.png";

const faqItems = [
    {
        question: "Pergunta 1?",
        answer: "Respota da pergunta 1.",
    },
    {
        question: "Pergunta 2?",
        answer: "Respota da pergunta 2.",
    },
    {
        question: "Pergunta 3?",
        answer: "Respota da pergunta 3.",
    },
    {
        question: "Pergunta 4?",
        answer: "Respota da pergunta 4.",
    },
];

const FaqSection = () => {
    return (
        <Grid container spacing={1}>
            <Grid size={{ xs: 12, md: 7 }}>
                <Box py={8}>
                    <PageSectionTitle
                        overline="Perguntas Frequentes"
                        title="Ainda com dúvidas? Nós respondemos"
                    />

                    <Stack spacing={2}>
                        {faqItems.map((item, idx) => (
                            <FaqAccordion key={idx} {...item} />
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
                            maxWidth: "100%",
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

export default FaqSection;
