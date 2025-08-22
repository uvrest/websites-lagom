import { Box, Container, Grid, Typography } from "@mui/material";
import PageSectionTitle from "./_PageSectionTitle";
import Highlight from "../../components/text/Highlight";
import aboutImg from "../../assets/images/about/about.png";
import HalfBleedSplit from "../../components/shared/HalfBleedSplit";

const AboutSection = () => {
    return (
        <HalfBleedSplit
            image={aboutImg}
            imagePercent={45}
            backgroundSize="contain"
            gap={3}
        >
            <PageSectionTitle
                maxWidth="100%"
                overline="Nem excesso, nem escassez"
                title="Lagom é equilíbrio"
                sx={{ mb: { xs: 2, md: 2 } }}
            />

            <Typography variant="body1" color="text.secondary" gutterBottom>
                LAGOM. Na Suécia, o conceito <Highlight color="secondary.main">"lagom" representa a busca pelo equilíbrio ideal</Highlight> – nem em excesso, nem em escassez,
                mas na medida certa. Aplicado à sustentabilidade, buscamos inspirar soluções eficientes, responsáveis e alinhadas às reais necessidades do
                meio ambiente e da sociedade.
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
                Somos uma empresa de consultoria ambiental dedicada a transformar desafios em oportunidades para negócios que buscam crescer de forma responsável
                e sustentável. Acreditamos que o <Highlight color="secondary.main">desenvolvimento econômico e a preservação ambiental podem caminhar juntos</Highlight>,
                e é com essa visão que oferecemos soluções estratégicas e personalizadas para cada cliente.
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
                Nossos princípios são guiados pela acessibilidade, garantindo que todas as empresas, independentemente do porte, tenham acesso a soluções
                viáveis e eficientes; competência, com uma equipe altamente qualificada e atualizada com as melhores práticas ambientais; desenvolvimento,
                promovendo inovação e crescimento sustentável; equilíbrio, buscando harmonia entre progresso e conservação; e sustentabilidade,
                que está no centro de todas as nossas ações.
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={2}>
                Com expertise e compromisso,
                <Highlight color="secondary.main">auxiliamos sua empresa a atender exigências ambientais, otimizar processos e agregar valor ao seu negócio.</Highlight>
            </Typography>

            <Typography variant="subtitle1" color="text.secondary">
                "Juntos, construímos um futuro mais sustentável."
            </Typography>
        </HalfBleedSplit>
    );
};

export default AboutSection;
