import { useMemo } from "react";
import { ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const StyledIconButton = ({
    icon: Icon,
    shape = "circle",
    href = null,
    color = "primary",
    size = 40,
    iconSize = "small", //small, medium, large
    ...rest
}) => {

    const theme = useTheme();

    const borderRadius = useMemo(() => {
        return shape === "square" ? theme.shape.borderRadius : "50%";
    }, [shape, theme]);

    const backgroundColor = theme.palette[color].main;
    const contrastColor = theme.palette.getContrastText(backgroundColor);

    const commonStyles = {
        width: size,
        height: size,
        borderRadius,
        backgroundColor: backgroundColor,
        color: contrastColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
            backgroundColor: theme.palette[color].dark,
            color: theme.palette.getContrastText(theme.palette[color].dark),
        },
    };

    // Componente clicável como link externo ou interno
    if (href) {
        return (
            <ButtonBase
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={commonStyles}
                {...rest}
            >
                <Icon fontSize={iconSize} />
            </ButtonBase>
        );
    }

    return (
        <ButtonBase sx={commonStyles} {...rest}>
            <Icon fontSize={iconSize} />
        </ButtonBase>
    );

}

export default StyledIconButton;