import { Box, Grid, Container, Typography } from "@mui/material";
import RenderLogo from "../navbar/RenderLogo";
import FooterContentBlock from "./FooterContentBlock";
import FooterLinkList from "./FooterLinkList";
import FooterContactList from "./FooterContactList";
import SocialMediaList from "../shared/SocialMediaList";
import Highlight from "../text/Highlight";
import { QuickMenuData, ServicesMenuData } from "../../config/FooterMenuData";

const Footer = () => {
    return (
        <>
            <Box
                sx={(theme) => ({
                    py: 6,
                    backgroundColor: theme.custom.color.darkGreen,
                    color: theme.palette.background.paper,
                })}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6}>

                        <Grid size={{ md: 3 }}>
                            <FooterContentBlock>

                                <RenderLogo width={230} theme="light" />

                                <Typography variant="body2" mt={3}>
                                    A <Highlight>Lagom</Highlight> possui especialistas em licenciamento e soluções ambientais com atendimento personalizado e serviços de confiança.
                                </Typography>

                                <SocialMediaList spacing={1} sx={{ mt: 3 }} />

                            </FooterContentBlock>
                        </Grid>

                        <Grid size={{ md: 3 }}>
                            <FooterContentBlock blockTitle="Menu Rápido">
                                <FooterLinkList linkList={QuickMenuData} />
                            </FooterContentBlock>
                        </Grid>

                        <Grid size={{ md: 3 }}>
                            <FooterContentBlock blockTitle="Serviços">
                                <FooterLinkList linkList={ServicesMenuData} />
                            </FooterContentBlock>
                        </Grid>

                        <Grid size={{ md: 3 }}>
                            <FooterContentBlock blockTitle="Contato">
                                <FooterContactList />
                            </FooterContentBlock>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
            <Box py={1} textAlign="center" fontSize={12} opacity={0.8} backgroundColor="primary.main">
                © {new Date().getFullYear()} Ecoportus - Soluções Ambientais. Todos os direitos reservados.
            </Box>
        </>
    )
};

export default Footer;