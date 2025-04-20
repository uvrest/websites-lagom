import { Grid, Container, Box } from "@mui/material";
import { BuildRounded, ShieldRounded, QueryBuilderRounded, EmojiNatureRounded } from "@mui/icons-material";
import FeatureCard from "../../components/cards/FeatureCard";

const features = [
    {
        icon: BuildRounded,
        title: "Serviços Especializados",
        description: "Técnicos qualificados para cada necessidade hidráulica ou ambiental.",
    },
    {
        icon: ShieldRounded,
        title: "Segurança e Qualidade",
        description: "Equipe identificada, pontual e com protocolos de segurança.",
    },
    {
        icon: QueryBuilderRounded,
        title: "Atendimento Emergencial 24hrs",
        description: "Disponíveis a qualquer hora, inclusive feriados e finais de semana.",
    },
    {
        icon: EmojiNatureRounded,
        title: "Compromisso Ambiental",
        description: "Soluções que respeitam o meio ambiente e as legislações vigentes.",
    },
];

const FeaturesSection = () => {
    return (
        <Grid container spacing={1}>
            {features.map((item, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                    <FeatureCard {...item} />
                </Grid>
            ))}
        </Grid>
    );
};

export default FeaturesSection;
