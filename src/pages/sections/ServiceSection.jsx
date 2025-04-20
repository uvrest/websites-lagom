import { Box, Button, Grid } from "@mui/material";
import PageSectionTitle from "./_PageSectionTitle";
import ServiceCard from "../../components/cards/ServiceCard";
import desentupimentoImg from "../../assets/images/services/desentupimento.jpg";
import cacaVazamentosImg from "../../assets/images/services/caca-vazamento.png";
import encanadorImg from "../../assets/images/services/encanador.jpg";
import dedetizacaoImg from "../../assets/images/services/dedetizacao.webp";
import limpaFossaImg from "../../assets/images/services/limpa-fossa.webp";
import manutencaoArImg from "../../assets/images/services/manutencao-ar.jpg";
import hidrojateamentoImg from "../../assets/images/services/hidrojato.jpg";
import caixaDaguaImg from "../../assets/images/services/caixa-dagua.jpg";
import pinturaReformaImg from "../../assets/images/services/pintura-reforma.webp";

const services = [
    {
        title: "Desentupimentos",
        description: "Soluções rápidas para entupimentos em pias, ralos, vasos e esgotos.",
        image: desentupimentoImg,
        href: "/servicos/desentupimentos",
    },
    {
        title: "Caça Vazamentos",
        description: "Detecção precisa de vazamentos ocultos sem quebra-quebra.",
        image: cacaVazamentosImg,
        href: "/servicos/caca-vazamentos",
    },
    {
        title: "Encanador Hidráulico",
        description: "--Descrição de encanador hidráulico aqui.--",
        image: encanadorImg,
        href: "/servicos/encanador-hidraulico",
    },
    {
        title: "Dedetização",
        description: "Controle eficaz de pragas urbanas com produtos seguros.",
        image: dedetizacaoImg,
        href: "/servicos/dedetizacao",
    },
    {
        title: "Hidrojateamento",
        description: "Remoção de sujeira, detritos e desentupimentos com jatos de alta pressão.",
        image: hidrojateamentoImg,
        href: "/servicos/hidrojateamento",
    },
    {
        title: "Limpeza de Fossas",
        description: "Serviço especializado de limpeza e sucção de fossas sépticas.",
        image: limpaFossaImg,
        href: "/servicos/limpeza-de-fossas",
    },
    {
        title: "Instalação de Ar-Condicionado",
        description: "Instalação profissional com garantia e eficiência energética.",
        image: manutencaoArImg,
        href: "/servicos/instalacao-de-ar-condicionados",
    },
    {
        title: "Limpeza de Caixas D'água",
        description: "Descrição do serviço aqui.",
        image: caixaDaguaImg,
        href: "/servicos/limpeza-de-caixa-dagua",
    },
    {
        title: "Obras, Pinturas e Reformas",
        description: "Descrição do serviço aqui",
        image: pinturaReformaImg,
        href: "/servicos/obras-pinturas-reformas",
    },
];

const ServiceSection = ({ mode = "light" }) => (
    <>
        <PageSectionTitle
            overline="Profissionais, eficientes e prontos pra resolver"
            title="Conheça Nossos Serviços"
            align="center"
            color={mode === "light" ? 'text.primary' : 'white'}
            sx={{ mb: 8 }}
        />

        <Grid container spacing={3}>
            {services.map((service, idx) => (
                <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
                    <ServiceCard {...service} />
                </Grid>
            ))}
        </Grid>

        <Box mt={8} display="flex" justifyContent="center">
            <Button variant="contained" size="large" color="secondary">
                Faça um orçamento gratuito
            </Button>
        </Box>
    </>
);

export default ServiceSection;