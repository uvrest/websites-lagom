import { Link as RouterLink } from "react-router";
import { Link } from "@mui/material";
import Logo from "../../assets/images/logos/lagom_logotipo.svg";

const RenderLogo = ({ width = 280 }) => {
    return (
        <Link component={RouterLink} to="/">
            <img src={Logo} alt="Lagom - Engenharia" style={{ width: width, maxWidth: "100%", height: "auto" }} />
        </Link>
    );
};

export default RenderLogo;
