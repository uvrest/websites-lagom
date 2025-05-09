import { Box, Typography } from "@mui/material";

const FooterContentBlock = ({ blockTitle, children }) => {
    return (
        <Box>
            {blockTitle && <Typography variant="h6" fontWeight={600} mb={2}>{blockTitle}</Typography>}
            {children}
        </Box>
    )
}

export default FooterContentBlock;