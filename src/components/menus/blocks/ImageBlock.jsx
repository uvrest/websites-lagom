// components/navbar/blocks/ImageBlock.jsx
import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router";

const ImageBlock = ({ src, alt, to }) => {
    return (
        <Box
            component={RouterLink}
            to={to}
            sx={{
                display: "block",
                width: "100%",
                borderRadius: 1,
                overflow: "hidden",
                mt: 1,
                "& img": {
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "transform 0.3s ease",
                },
                "&:hover img": {
                    transform: "scale(1.03)",
                },
            }}
        >
            <img src={src} alt={alt || ""} />
        </Box>
    );
};

export default ImageBlock;
