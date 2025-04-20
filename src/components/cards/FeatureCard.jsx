import { Box, Typography } from "@mui/material";

const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <Box
            sx={{
                position: "relative",
                top: -16,
                zIndex: 1,
                height: "100%",
                p: 3,
                textAlign: "left",
                borderRadius: 2,
                backgroundColor: "background.paper",
                boxShadow: 2,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-8px)",
                },
            }}
        >

            {Icon && <Icon sx={{ fontSize: 40, mb: 1, color: "primary.main" }} />}

            <Typography variant="h5" fontWeight={600} gutterBottom>
                {title}
            </Typography>

            <Typography variant="body1" color="text.secondary">
                {description}
            </Typography>

        </Box>
    );
};

export default FeatureCard;
