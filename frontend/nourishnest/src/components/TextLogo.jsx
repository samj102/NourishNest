import Logo from "../assets/Logo.png";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const TextLogo = () => {
    return (
        <Link to="/" style={{ color: 'black', textDecoration: 'none', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={Logo} alt="Logo" style={{ marginRight: 10, width: '3em' }} />
            <Typography variant="h6" fontWeight='500'>
                Nourish Nest
            </Typography>
        </Link>
    )
}

export default TextLogo;