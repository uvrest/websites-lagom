import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material";
import { LocalPhoneRounded, EmailRounded, PinDropRounded } from "@mui/icons-material";

const contactData = [
    {
        primary: "Contato",
        secondary: "(51) 99257-3402",
        icon: <LocalPhoneRounded />,
    },
    {
        primary: "E-mail",
        secondary: "ecoportus@gmail.com",
        icon: <EmailRounded />,
    },
    {
        primary: "Endereço",
        secondary: "Av. Alberto Bins 806, Porto Alegre/RS",
        icon: <PinDropRounded />,
    },
];

const FooterContactList = () => {
    return (
        <List dense={true}>
            {contactData.map((item, index) => {
                return (
                    <ListItem
                        key={index}
                        disablePadding
                        sx={{
                            mb: 2,
                            '&:last-child': { mb: 0 }
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}>
                                {item.icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.primary}
                            secondary={item.secondary || null}
                            slotProps={{
                                primary: { fontSize: 18 },
                                secondary: { color: '#f0f0f0' }
                            }}
                        />
                    </ListItem>
                )
            })}
        </List>
    );
}

export default FooterContactList;