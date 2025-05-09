import { Box, Typography } from "@mui/material";

const PageSectionTitle = ({
    overline,
    title,
    subtitle,
    maxWidth = "70%",
    align = "left", // "center", "right"
    color = "text.primary",
    sx = {},
}) => {
    return (
        <Box display="flex" justifyContent={align} sx={{ mb: { xs: 3, md: 5 }, ...sx }}>
            <Box maxWidth={maxWidth} textAlign={align}>
                {overline && (
                    <Typography
                        variant="overline"
                        color="secondary.main"
                        fontWeight={600}
                        sx={{ display: "block", mb: 0, }}

                    >
                        {overline}
                    </Typography>
                )}

                {title && (
                    <Typography
                        variant="h3"
                        component="h2"
                        fontWeight={600}
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
        </Box>
    );
};

export default PageSectionTitle;
