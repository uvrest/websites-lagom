import { Box, Typography } from "@mui/material";

const FeatureListCard = ({ icon: Icon, title, description, color = "primary" }) => {
    return (
        <Box display="flex" alignItems="flex-start" gap={2}>
            <Box
                sx={(theme) => ({
                    width: 44,
                    height: 44,
                    minWidth: 44,
                    borderRadius: "50%",
                    backgroundColor: theme.palette[color].main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    mt: 0.5,
                })}
            >
                {Icon && <Icon fontSize="small" />}
            </Box>

            <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default FeatureListCard;
