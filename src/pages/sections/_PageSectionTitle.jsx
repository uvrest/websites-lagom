import { Box, Typography } from "@mui/material";

const PageSectionTitle = ({
    overline,
    title,
    subtitle,
    align = "left", // "center", "right"
    color = "text.primary",
    sx = {},
}) => {
    return (
        <Box textAlign={align} sx={{ mb: { xs: 3, md: 3 }, ...sx }}>
            {overline && (
                <Typography
                    variant="overline"
                    color="secondary.main"
                    fontWeight={600}
                    sx={{ display: "block", mb: 0 }}
                >
                    {overline}
                </Typography>
            )}

            {title && (
                <Typography
                    variant="h2"
                    component="h2"
                    fontWeight={700}
                    color={color}
                    gutterBottom
                >
                    {title}
                </Typography>
            )}

            {subtitle && (
                <Typography variant="body1" color="text.secondary">
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};

export default PageSectionTitle;
