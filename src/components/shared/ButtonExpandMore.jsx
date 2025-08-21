import { useTheme } from "@mui/material";
import { Button } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";

const ButtonExpandMore = ({ labelNonExpanded = "Ver mais", labelExpanded = "Ver menos", variant = "outlined", color = "secondary", expanded = false, onClick = () => { }, sx }) => {

    const theme = useTheme();

    return (
        <Button
            variant={variant}
            color={color}
            endIcon={
                <ExpandMoreRounded
                    sx={{
                        transition: theme.transitions.create('transform', {
                            duration: theme.transitions.duration.shortest,
                        }),
                        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                />
            }
            onClick={onClick}
            sx={{ ...sx }}
        >
            {!expanded ? labelNonExpanded : labelExpanded}
        </Button>
    );
}

export default ButtonExpandMore;