import { Box, Container } from "@mui/material";
import HeroOverlay from "../HeroOverlay";

const VideoBox = ({ videoPath, overlayColor, children }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '80vh',
                overflow: 'hidden',
            }}
        >

            <HeroOverlay color={overlayColor} />

            <Box
                component="video"
                src={videoPath}
                autoPlay
                loop
                muted
                playsInline
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />

            {/** Content */}
            <Container sx={{ position: 'relative', height: '100%', }}>
                <Box
                    sx={(theme) => ({
                        px: 6,
                        py: 10,
                        position: 'absolute',
                        zIndex: 1,
                        width: '60%', // valor padrão (lg pra cima)
                        border: `1px solid ${theme.palette.primary.main}`,
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        borderRadius: '0 100px',
                        // sobrescreve para md e menores
                        [theme.breakpoints.down('md')]: {
                            width: '98%',
                        },
                    })}
                >
                    {children}
                </Box>
            </Container>

        </Box>
    )
}

export default VideoBox;