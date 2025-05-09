import { Typography } from "@mui/material";
import LogoSlider from "../../components/sliders/LogoSlider";
import Highlight from "../../components/text/Highlight";

// Glob import das imagens
const images = import.meta.glob(
    '../../assets/images/clients/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
);

const logos = Object.entries(images).map(([path, src]) => {
    const filename = path.split('/').pop(); // ex: "confiance-consultoria.webp"
    const alt = filename
        .replace(/\.(png|jpe?g|webp)$/, '') // remove extensão
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase()); // capitaliza
    return { src, alt };
});

const ClientsSection = () => {
    return (
        <>
            <Typography
                variant="h6"
                fontWeight={400}
                textAlign="center"
            >
                Clientes e parceiros que têm <Highlight color="secondary.main">confiança</Highlight> em nosso trabalho
            </Typography>

            <LogoSlider logos={logos} />
        </>
    );
}

export default ClientsSection;