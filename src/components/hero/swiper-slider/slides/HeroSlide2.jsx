import { Box, Typography, Button, Stack } from "@mui/material";
import { HandymanRounded, WhatsApp } from "@mui/icons-material";
import HeroOverlay from "../../HeroOverlay";
import slide2Img from "../../../../assets/images/slides/slide2.jpg";

const HeroSlide2 = () => {

    const overlayColor = 'linear-gradient(360deg, rgba(3, 34, 27, 0) 74.01%, rgba(3, 34, 27, 0.9) 100%), linear-gradient(270deg, rgba(3, 34, 27, 0) 25.1%, rgba(3, 34, 27, 0.516) 41.43%, rgba(3, 34, 27, 0.86) 58.93%)';

    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "60vh", md: "80vh" },
                backgroundImage: `url(${slide2Img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                px: { xs: 3, md: 10 },
                zIndex: 3,
            }}
        >

            <HeroOverlay color={overlayColor} blur={0} />

            <Box maxWidth="65%" zIndex={2}>
                <Typography variant="h5" fontWeight={400} color="white" mb={2} textTransform="uppercase">
                    <HandymanRounded color="primary" sx={{ position: "relative", top: 4, mr: 0.5 }} /> Chame a Ecoportus e não tenha dor de cabeça
                </Typography>
                <Typography variant="h1" fontWeight={900} color="white" mb={2} textTransform="uppercase">
                    Serviço de Caça Vazamentos
                </Typography>
                <Typography variant="body1" color="white" mb={4}>
                    Caça vazamentos com detecção termal eletrônica. Evite quebrar sua parede ou piso, nós podemos resolver o seu problema. <strong>Ligue para a Ecoportus e agende uma visita.</strong>
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<WhatsApp />}
                    >
                        Faça um orçamento
                    </Button>
                </Stack>
            </Box>

        </Box>
    );
};

export default HeroSlide2;
