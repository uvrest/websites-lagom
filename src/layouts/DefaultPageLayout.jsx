import { Box } from "@mui/material";
import { Outlet } from "react-router";
import PageHeader from "../components/shared/PageHeader";

const DefaultPageLayout = ({ title, imageName = null }) => {
    return (
        <Box component="main">
            <PageHeader
                title={title}
                imageName={imageName}
            />
            <Box>
                <Outlet />
            </Box>
        </Box>
    );
};

export default DefaultPageLayout;
