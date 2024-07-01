import {AppBar, Toolbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Logo from "./Logo.jsx";
import styled from "@emotion/styled";
import LoginButton from "./LoginButton.jsx";

const CustomToolBar = styled(Toolbar)`  
    display: flex;
    justify-content: space-between;
`

function CustomAppBar() {
    const navigate = useNavigate()

    return <>
        <AppBar position="static">
            <CustomToolBar>
                <Logo/>
                <LoginButton/>
            </CustomToolBar>
        </AppBar>
    </>
}

export default CustomAppBar;