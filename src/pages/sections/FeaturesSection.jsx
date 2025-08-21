import { Box, Grid } from "@mui/material";
import { ContentPasteRounded, LocationCityRounded, CompostRounded, SquareFootRounded } from "@mui/icons-material";
import PageSectionTitle from "./_PageSectionTitle";
import FeatureCard from "../../components/cards/FeatureCard";
import licenciamentoAmbiental from "../../assets/images/services/licenciamento-ambiental.jpg";
import planejamentoUrbano from "../../assets/images/services/planejamento-urbano.jpg";
import solucoesAmbientais from "../../assets/images/services/solucoes-ambientais.jpg";
import consultoriaGeotecnica from "../../assets/images/services/consultoria-geotecnica.jpg";

const services = [
    {
        id: 1,
        icon: ContentPasteRounded,
        title: "Licenciamento Ambiental",
        description: "Assessoria completa no processo de licenciamento ambiental, garantindo conformidade legal e sustentabilidade para seu empreendimento.",
        details: [
            'Estudos Ambientais (EIA, RIMA, PBA, EAS, RAP)',
            'Execução de Monitoramento Ambiental',
            'Relatório Anual de Atividades Potencialmente Poluidoras – RAPP',
            'Plano de Recuperação de Área Degradada – PRAD',
            'Plano de Gerenciamento de Resíduos – PGRS – PGRCC',
            'Diagnóstico Socioambiental – DSA',
            'Inventário Florestal',
            'Estudo Hidrogeológico',
        ],
        image: licenciamentoAmbiental,
    },
    {
        id: 2,
        icon: LocationCityRounded,
        title: "Planejamento Urbano",
        description: "Soluções estratégicas para o desenvolvimento urbano, promovendo ocupação ordenada, mobilidade e qualidade de vida.",
        details: [
            'Estudo de Impacto de Vizinhança – EIV',
            'Estudo de Impacto de Tráfego – EIT',
            'Laudo Acústico',
        ],
        image: planejamentoUrbano,
    },
    {
        id: 3,
        icon: CompostRounded,
        title: "Soluções Ambientais",
        description: "Projetos e ações sustentáveis para prevenção, mitigação e recuperação de impactos ambientais em diferentes setores.",
        details: [
            'Estudos de Viabilidade Ambiental',
            'Cadastro Ambiental Rural – CAR',
            'Georreferenciamento e Geoprocessamento',
        ],
        image: solucoesAmbientais,
    },
    {
        id: 4,
        icon: SquareFootRounded,
        title: "Consultoria Geotécnica",
        description: "Análises técnicas do solo e subsolo para garantir segurança, viabilidade e eficiência em obras e empreendimentos.",
        details: [
            'Projeto de Terraplenagem',
            'Estabilização de taludes',
            'Projeto de contenções',
            'Projeto de drenagem pluvial',
        ],
        image: consultoriaGeotecnica,
    },
];

const FeaturesSection = () => {
    return (
        <Box>
            <PageSectionTitle
                overline="Nossos Serviços"
                title="Conheça as nossas soluções ambientais"
                align="center"
            />
            <Grid container spacing={2}>
                {services.map((service, _) => (
                    <Grid size={{ xs: 12, sm: 12, md: 6 }} key={service.id}>
                        <FeatureCard {...service} sx={{ height: "100%", }} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturesSection;
