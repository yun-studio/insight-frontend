import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Logo() {
    const navigate = useNavigate()

    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => navigate('/')}
        >
            Insight
        </Typography>
    )
}

export default Logo;