import { Box, Container, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { unslugify } from "../../utils/stringUtils";

const PageHeader = ({ title, imageName }) => {

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const hasImage = Boolean(imageName);
    const imageUrl = hasImage
        ? `${import.meta.env.BASE_URL}src/assets/images/page-headers/${imageName}`
        : null;

    return (
        <Box
            sx={{
                height: 280,
                display: "flex",
                alignItems: "flex-end",
                backgroundImage: hasImage ? `url(${imageUrl})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                color: "white",
                p: 4,
                backgroundColor: hasImage ? undefined : (theme) => theme.palette.primary.main,
                "&::before": hasImage
                    ? {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        zIndex: 1,
                    }
                    : undefined,
            }}
        >
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
                    <Typography variant="h2" fontWeight={700}>
                        {title}
                    </Typography>
                )}
            </Container>
        </Box>
    );
}

export default PageHeader;