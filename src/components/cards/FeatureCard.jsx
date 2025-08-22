import React, { useState } from "react";
import {
    Card,
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,
    CardContent,
    CardMedia,
    Typography,
    Avatar,
    Stack,
    Collapse
} from "@mui/material";

import ButtonExpandMore from "../shared/ButtonExpandMore";

const FeatureCard = ({ icon: Icon, title, description, details, image, alt = '', sx = {} }) => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-8px)",
                },
                ...sx,
            }}
        >


            <CardContent sx={{ m: 0, pb: 0, pt: 2, }}>

                <Stack spacing={2} alignItems="stretch" sx={{ width: '100%', pb: 0, m: 0, }}>

                    {/* Ícone */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Avatar
                            sx={(theme) => ({
                                bgcolor: theme.palette.primary.light,
                                width: 85,
                                height: 85,
                                transition: "background-color 0.3s",
                            })}
                        >
                            {Icon && <Icon sx={{ fontSize: 40, color: 'text.primary' }} />}
                        </Avatar>

                        {/* Título */}
                        <Typography variant="h5" component="h3" fontWeight={500} gutterBottom>
                            {title}
                        </Typography>

                        {/* Descrição */}
                        <Typography variant="body1" color="text.secondary">
                            {description}
                        </Typography>

                        <Box mt={2}>
                            <ButtonExpandMore labelNonExpanded="Ver mais" labelExpanded="Ver menos" variant="outlined" color="secondary" expanded={expanded} onClick={handleExpandClick} />
                        </Box>
                    </Box>

                    <Collapse in={expanded} timeout="auto" unmountOnExit={false}>
                        <Box sx={{ width: '100%', display: 'flex', flexGrow: 1 }}>
                            <List sx={{ width: '100%', }}>
                                {details.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <ListItem>
                                                <ListItemText primary={item} />
                                            </ListItem>
                                            <Divider component="li" />
                                        </React.Fragment>
                                    );
                                })}
                            </List>
                        </Box>
                    </Collapse>
                </Stack>
            </CardContent>

            {/* Imagem (opcional) */}
            {image && (
                <CardMedia
                    component="img"
                    alt={alt || title}
                    height="275"
                    image={image}
                    loading="lazy"
                />
            )}

        </Card>
    );
};

export default FeatureCard;