import { Box, Container, Breadcrumbs, Link as MuiLink, Typography, alpha } from "@mui/material";
import { useLocation } from "react-router";
import { unslugify } from "../../utils/stringUtils";
import symbolImg from "../../assets/images/abstract/acessibilidade-white.png";

const PageHeader = ({ title }) => {

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                zIndex: 2,
                height: { xs: 250, md: 200 },
                display: "flex",
                alignItems: "flex-end",
                p: 4,
                '&::after': {
                    content: "''",
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.95),
                }
            }}
        >

            {/** Absoluted Symbol */}
            <Box
                component='img'
                src={symbolImg}
                sx={{
                    position: 'absolute',
                    right: 50,
                    top: -25,
                    maxWidth: 300,
                    filter: "brightness(100)",
                }}
            />

            <Container sx={{ zIndex: 2 }}>
                <Breadcrumbs sx={{ mb: 1 }} separator="›" color="inherit">
                    <MuiLink underline="hover" color="inherit" href="/">
                        Início
                    </MuiLink>
                    {pathnames.map((value, index) => {
                        const isLast = index === pathnames.length - 1;
                        const label = unslugify(decodeURIComponent(value));
                        return isLast ? (
                            <Typography key={value}>{label}</Typography>
                        ) : (
                            <MuiLink
                                key={value}
                                underline="hover"
                                color="inherit"
                                href={`/${pathnames.slice(0, index + 1).join("/")}`}
                            >
                                {label}
                            </MuiLink>
                        );
                    })}
                </Breadcrumbs>

                {title && (
                    <Typography variant="h2" component="h1" fontWeight={600}>
                        {title}
                    </Typography>
                )}
            </Container>
        </Box>
    );
}

export default PageHeader;