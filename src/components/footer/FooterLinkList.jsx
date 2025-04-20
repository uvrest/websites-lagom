import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router";

const FooterLinkList = ({ linkList, columns = 1, denseMode = true }) => {
    return (
        <List
            dense={denseMode}
            sx={(theme) => ({
                display: "grid",
                gridColumnGap: theme.spacing(4),
                gridTemplateColumns: `repeat(${columns}, auto)`,
                justifyContent: "space-between",
            })}
        >
            {linkList.map((item, index) => {
                return (
                    <ListItem
                        key={`${item.to}-${index}`}
                        disablePadding
                        disableGutters
                        sx={(theme) => ({
                            transition: "color 0.2s ease-in-out",
                            '&:hover': {
                                color: theme.palette.primary.main,
                            }
                        })}
                    >
                        <ListItemButton component={Link} to={item.to} disableGutters disableRipple>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default FooterLinkList;