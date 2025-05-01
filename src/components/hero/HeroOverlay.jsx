import { Box } from "@mui/material";

const HeroOverlay = ({
    color = "rgba(0,0,0,0.4)",
    blur = 0,
    zIndex = 1,
    ...rest
}) => {

    const isGradient = color.startsWith("linear");

    return (
        <Box
            sx={{
                position: "absolute",
                inset: 0,
                zIndex,
                pointerEvents: "none",
                backgroundColor: isGradient ? undefined : color,
                backgroundImage: isGradient ? color : undefined,
                backdropFilter: blur ? `blur(${blur}px)` : undefined,
                WebkitBackdropFilter: blur ? `blur(${blur}px)` : undefined,
            }}
            {...rest}
        />
    );
};

export default HeroOverlay;
