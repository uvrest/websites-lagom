import { Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

const LinksBlock = ({ items = [] }) => {
    return (
        <Stack spacing={0.5}>
            {items.map((item) => (
                <Typography
                    key={item.to}
                    variant="body2"
                    component={RouterLink}
                    to={item.to}
                    sx={{
                        color: "text.primary",
                        textDecoration: "none",
                        "&:hover": {
                            color: "secondary.main",
                        },
                    }}
                >
                    {item.label}
                </Typography>
            ))}
        </Stack>
    );
};

export default LinksBlock;
