import { Box, Grid, Typography, Paper } from "@mui/material";
import LinksBlock from "./blocks/LinksBlock";
import ImageBlock from "./blocks/ImageBlock";

const MegaMenu = ({ items = [], minWidth = 500 }) => {

    if (items.length === 0) return null;

    const renderContentBlock = (block, index) => {
        switch (block.type) {
            case "links":
                return <LinksBlock key={index} items={block.items} />;
            case "image":
                return <ImageBlock key={index} {...block} />;
            default:
                return null;
        }
    };

    return (
        <Paper elevation={3} sx={{ px: 3, py: 2, minWidth: minWidth }}>
            <Grid container spacing={3}>
                {items.map((section, idx) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                        <Box mb={1}>
                            <Typography variant="subtitle2" fontWeight="bold">
                                {section.title}
                            </Typography>
                        </Box>
                        {section.content.map((block, i) => renderContentBlock(block, i))}
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default MegaMenu;
