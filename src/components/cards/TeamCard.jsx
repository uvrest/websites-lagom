import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const TeamCard = ({ image, name, role, description }) => {
    return (
        <Card sx={{ height: "100%" }}>
            {/** Image */}
            <CardMedia
                component="img"
                height="480"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography variant="h4">
                    {name}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 2 }} color="secondary">
                    {role}
                </Typography>
                <Typography variant="body1">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TeamCard;