import {Button} from "@mui/material";
import styled from "@emotion/styled";

const CustomButton = styled(Button)`
    text-transform: none;
`

function LoginButton() {
    return (
        <CustomButton color="inherit">
            LOGIN
        </CustomButton>
    )
}

export default LoginButton;