import { Box, Grid, Container, Typography, Link } from "@mui/material";
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
            <Box py={1} textAlign='center' fontSize={14} opacity={0.8} backgroundColor="primary.main">
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            © {new Date().getFullYear()} Lagom - Engenharia Ambiental. Todos os direitos reservados.
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ width: "100%", display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                                Desenvolvido por:<Link color="secondary" href="tel:5551994426690" sx={{ fontWeight: 500, ml: 0.5 }}>Gabriel Coelho</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
};

export default Footer;