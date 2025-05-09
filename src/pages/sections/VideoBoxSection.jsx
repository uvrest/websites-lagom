import { Typography, Button } from "@mui/material";
import VideoBox from "../../components/hero/video-box/VideoBox";
import backgroundVideo from "../../assets/videos/bg-video.mp4";
import Highlight from "../../components/text/Highlight";

const VideoBoxSection = () => {

    const overlayColor = 'linear-gradient(90deg,rgba(7, 43, 49, 0.93) 0%, rgba(22, 117, 106, 0.6) 54%, rgba(237, 221, 83, 0.34) 100%)';

    return (
        <VideoBox videoPath={backgroundVideo} overlayColor={overlayColor}>
            <Typography variant="h2" color="white" component="h2" mb={2}>
                Olá, nós somos <Highlight>Lagom</Highlight>.
            </Typography>
            <Typography variant="subtitle1" color="white" mb={3}>
                Promovemos o <Highlight>equilíbrio</Highlight> e o <Highlight>crescimento ordenado</Highlight> entre sociedade e meio ambiente.
            </Typography>
            <Typography variant="body1" color="white" component="p" mb={2}>
                Acreditamos que o meio ambiente é um bem muito
                valioso, que deve ser protegido e preservado para as gerações futuras.
            </Typography>
            <Typography variant="body1" color="white" component="p" mb={2}>
                Oferecemos soluções ambientais para empresas que buscam crescer de forma responsável e sustentável.
            </Typography>
            <Button variant="contained" size="large">Entre em contato</Button>
        </VideoBox>
    );
}

export default VideoBoxSection;