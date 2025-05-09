import { Card, CardContent, CardMedia, CardActionArea, Typography, Avatar, Stack } from "@mui/material";

const FeatureCard = ({ icon: Icon, title, description, image, alt = '', sx = {} }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-8px)",
                },
                ...sx,
            }}
        >
            <CardActionArea>
                <CardContent sx={{ mb: 2 }}>

                    <Stack spacing={2} alignItems="center">

                        {/* Ícone */}
                        <Avatar
                            sx={(theme) => ({
                                bgcolor: 'primary.light',
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
                    </Stack>
                </CardContent>

                {/* Imagem (opcional) */}
                {image && (
                    <CardMedia
                        component="img"
                        alt={alt || title}
                        height="225"
                        image={image}
                        loading="lazy"
                    />
                )}
            </CardActionArea>
        </Card>
    );
};

export default FeatureCard;