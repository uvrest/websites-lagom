import { Box } from "@mui/material";
import { Outlet } from "react-router";
import PageHeader from "../components/shared/PageHeader";

const DefaultPageLayout = ({ title }) => {
    return (
        <Box component="main">
            <PageHeader
                title={title}
            />
            <Box>
                <Outlet />
            </Box>
        </Box>
    );
};

export default DefaultPageLayout;
