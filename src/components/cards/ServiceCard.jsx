import { Box, Typography, ButtonBase } from "@mui/material";
import { useNavigate } from "react-router";

const ServiceCard = ({ title, description, image, href }) => {

    const navigate = useNavigate();

    return (
        <ButtonBase
            focusRipple={true}
            onClick={() => navigate(href)}
            sx={{
                width: "100%",
                height: 400,
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                textAlign: "left",
                display: "flex",
                "& img": {
                    transition: "transform 0.4s ease",
                },
                "&:hover img": {
                    transform: "scale(1.1)",
                },
                "&:hover .read-more": {
                    transform: "translateY(0)",
                    opacity: 1,
                    mt: 2,
                },
            }}
        >

            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(180deg, rgba(3, 34, 27, 0) 45.62%, rgba(3, 34, 27, 0.8) 76.07%)",
                }}
            />

            {/** Image */}
            <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
            />

            {/* Text and revealable link */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    px: 2,
                    py: 2,
                    zIndex: 2,
                    transition: "all 0.4s ease",
                }}
            >
                <Typography variant="h5" color="white" fontWeight={700}>
                    {title}
                </Typography>
                <Typography variant="body2" color="white" sx={{ opacity: 0.85 }}>
                    {description}
                </Typography>

                {/* Hidden link */}
                <Box
                    sx={{
                        mt: 0,
                        transform: "translateY(100%)",
                        opacity: 0,
                        transition: "all 0.4s ease",
                    }}
                    className="read-more"
                >
                    <Typography variant="body2" fontWeight={600} color="secondary">
                        Saiba mais
                    </Typography>
                </Box>
            </Box>

        </ButtonBase>
    );
};

export default ServiceCard;
