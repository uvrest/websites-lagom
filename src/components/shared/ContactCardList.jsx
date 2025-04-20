import { Grid } from "@mui/material";
import { WhatsApp, PhoneRounded, EmailRounded, PinDropRounded } from "@mui/icons-material";
import ContactCard from "../cards/ContactCard";

const contactData = [
    { id: 1, title: "Contato", description: "(51) 99257-3402", icon: PhoneRounded },
    { id: 2, title: "E-mail", description: "ecoportus@gmail.com", icon: EmailRounded },
    { id: 3, title: "Endereço", description: "Av. Alberto Bins 806, Porto Alegre/RS", icon: PinDropRounded },
    { id: 4, title: "Whatsapp", description: "(51) 99257-3402", icon: WhatsApp },
];

const ContactCardList = () => {
    return (
        <Grid container spacing={2}>
            {contactData.map((item) => {
                return (
                    <Grid key={item.id} size={{ lg: 3, md: 6 }}>
                        <ContactCard
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            sx={{ height: "100%", }}
                        />
                    </Grid>
                );
            })}
        </Grid>
    )
}

export default ContactCardList;