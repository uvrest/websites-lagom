import { Box, Container } from "@mui/material";
import { useMemo } from "react";
import { useResolveThemeColor } from "../../utils/colorUtils";

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

    const resolve = useResolveThemeColor();
    const bg = useMemo(() => resolve(background), [background, resolve]);

    return (
        <Box
            component="section"
            id={id}
            sx={[{ py: paddingY, backgroundColor: bg }, sx]}
            {...rest}
        >
            {container ? <Container maxWidth={maxWidth}>{children}</Container> : children}
        </Box>
    );
};

export default PageSection;