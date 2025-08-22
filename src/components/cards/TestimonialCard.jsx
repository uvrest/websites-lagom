import { Box, Stack, Typography, Card, Avatar, Rating, Divider } from "@mui/material";

const TestimonialCard = ({ avatar, name, subtitle, testimonial, rating }) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                p: 5,
                minHeight: 250,
            }}
        >
            {/* Header: Avatar + Info */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={avatar} alt={name} sx={{ width: 64, height: 64 }} />
                    <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {subtitle}
                        </Typography>
                    </Box>
                </Stack>

                {rating != null && (
                    <Rating value={rating} precision={0.5} readOnly size="small" />
                )}
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ mt: "auto" }}>
                <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: { xs: 25, md: 6 }, // quantas linhas no máx.
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    "{testimonial}"
                </Typography>
            </Box>


        </Card>
    )
}

export default TestimonialCard;