import { Link as RouterLink } from "react-router";
import { Link } from "@mui/material";
import Logo from "../../assets/images/logos/ecoportus-logo-horizontal.png";

const RenderLogo = ({ width = 280 }) => {
    return (
        <Link component={RouterLink} to="/">
            <img src={Logo} alt="ecoportus" style={{ width: width, maxWidth: "100%", height: "auto" }} />
        </Link>
    );
};

export default RenderLogo;
