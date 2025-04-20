import { Paper, Box, Container, Grid } from "@mui/material";
import { serviceRoutesData } from "../config/serviceRoutesData";
import { Outlet } from "react-router";
import { useLastPathSegment } from "../utils/routerUtils";
import PageHeader from "../components/shared/PageHeader";
import ServicesAsideMenu from "../components/menus/ServicesAsideMenu";

const ServiceLayout = () => {

    const slug = useLastPathSegment();

    const data = serviceRoutesData[slug] || {
        title: "Serviço",
        image: "default.jpg",
    };

    return (
        <Box component="main">

            <PageHeader
                title={data.title}
                imageName={data.image}
            />

            <Paper sx={{ py: 5 }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid size={{ md: 4 }}>
                            <ServicesAsideMenu />
                        </Grid>
                        <Grid size={{ md: 8 }}>
                            <Outlet />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Box>
    );
}

export default ServiceLayout;