import { Box, Typography, Paper } from "@mui/material";
import StyledIconButton from "../shared/StyledIconButton";

const ContactCard = ({ title, description, icon, sx }) => {
    return (
        <Paper
            elevation={0}
            sx={(theme) => ({
                p: 2,
                position: "relative",
                background: theme.palette.grey[100],
                borderRadius: theme.shape.borderRadius,
                transition: "all 0.3s ease-in-out",
                '&:hover': {
                    color: theme.palette.common.white,
                    background: theme.palette.primary.main,
                },
                '&:hover .custom-icon-button': {
                    color: theme.palette.primary.dark,
                    background: theme.palette.common.white,
                },
                ...sx,
            })}
        >
            <Box mb={2}>
                <StyledIconButton
                    className="custom-icon-button"
                    icon={icon}
                    shape="circle"
                    color="primary"
                    size={60}
                    iconSize="medium"
                />
            </Box>

            <Typography variant="h5" fontWeight={600} gutterBottom>
                {title}
            </Typography>

            <Typography variant="body1">
                {description}
            </Typography>

        </Paper>
    );
}

export default ContactCard;