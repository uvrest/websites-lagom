import { Link as RouterLink } from "react-router";
import { Link } from "@mui/material";
import Logo from "../../assets/images/logos/lagom_logotipo.svg";
import LogoLt from "../../assets/images/logos/lagom_lt.svg";

const RenderLogo = ({ width = 280, theme = "default" }) => {
    return (
        <Link component={RouterLink} to="/">
            <img src={theme === 'default' ? Logo : LogoLt} alt="Lagom - Engenharia" style={{ width: width, maxWidth: "100%", height: "auto" }} />
        </Link>
    );
};

export default RenderLogo;
