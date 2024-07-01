import {Box} from "@mui/material";
import CustomAppBar from "./CustomAppBar.jsx";
import styled from "@emotion/styled";

const CustomHeader = styled(Box)`
    margin-bottom: 5px;
`

function Header() {
    return (
        <CustomHeader>
            <CustomAppBar/>
        </CustomHeader>
    )
}

export default Header