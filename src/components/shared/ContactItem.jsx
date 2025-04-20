// import
import React from "react";
import { Box, Typography } from "@mui/material";

const ContactItem = ({ icon, text, color }) => {

    const iconWithColor = React.cloneElement(icon, {
        sx: { color: color },
    });

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {iconWithColor}
            <Typography variant="body2" sx={{ color }}>
                {text}
            </Typography>
        </Box>
    );
};

export default ContactItem;
