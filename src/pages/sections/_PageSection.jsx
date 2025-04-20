import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PageSection = ({
    background = "paper",
    container = true,
    maxWidth = "lg",
    paddingY = { xs: 8, md: 12 },
    sx = {},
    id,
    children,
    ...rest
}) => {
    const theme = useTheme();

    const colorMap = {
        white: theme.palette.common.white,
        black: theme.palette.common.black,
        paper: theme.palette.background.paper,
        default: theme.palette.background.default,
        primary: theme.palette.primary.main,
        primaryLight: theme.palette.primary.light,
        primaryDark: theme.palette.primary.dark,
        secondary: theme.palette.secondary.main,
        secondaryLight: theme.palette.secondary.light,
        secondaryDark: theme.palette.secondary.dark,
        customDarkGreen: theme.custom?.color?.darkGreen,
    };

    return (
        <Box
            component="section"
            id={id}
            sx={{
                py: paddingY,
                backgroundColor: colorMap[background] || colorMap.paper,
                ...sx,
            }}
            {...rest}
        >
            {container ? (
                <Container maxWidth={maxWidth}>
                    {children}
                </Container>
            ) : (
                children
            )}
        </Box>
    );
};

export default PageSection;
