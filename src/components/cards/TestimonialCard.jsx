import { Box, Stack, Typography, Card, CardContent, Avatar, Rating } from "@mui/material";

const TestimonialCard = ({ avatar, name, subtitle, testimonial, rating }) => {
    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 5,
            }}
        >
            {/* Header: Avatar + Info */}
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Avatar
                    src={avatar}
                    alt={name}
                    sx={{ width: 64, height: 64 }}
                />
                <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {subtitle}
                    </Typography>
                </Box>
            </Stack>

            {/* Rating */}
            {rating !== undefined && rating !== null && (
                <Rating value={rating} precision={0.5} readOnly size="small" sx={{ mb: 2 }} />
            )}

            {/* Testimonial text */}
            <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.6 }}>
                "{testimonial}"
            </Typography>


        </Card>
    )
}

export default TestimonialCard;