import { Box, Typography, alpha } from "@mui/material";
import AboutHeroImg from "../../assets/images/about/about-hero.jpg";
import Highlight from "../../components/text/Highlight";

const AboutHeroSection = () => {
    return (
        <Box sx={(theme) => ({
            px: { xs: 3, md: 8 },
            pt: 12,
            pb: 0
        })}>
            <Box
                sx={(theme) => ({
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    zIndex: 2,
                    background: theme.palette.secondary.main,
                    backgroundImage: `url(${AboutHeroImg})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    p: 3,
                    height: '550px',
                    borderRadius: '0 100px 0 100px',
                    '&::before': {
                        content: "''",
                        position: 'absolute',
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1,
                        background: alpha(theme.palette.common.black, 0.3),
                    }
                })}
            >
                <Typography color="white" variant="h5" textAlign='center'>
                    Equilíbrio é a chave que abre a porta para um futuro <Highlight>+ sustentável</Highlight>
                </Typography>
            </Box>
        </Box>
    )
}

export default AboutHeroSection;