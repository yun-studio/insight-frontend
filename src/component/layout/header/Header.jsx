import CustomAppBar from "./CustomAppBar.jsx";
import styled from "@emotion/styled";

const CustomHeader = styled("header")`
    width: 100%;
    margin: 0 0 5 0;
    padding: 0 0 0 0;
`

function Header() {
    return (
        <CustomHeader>
            <CustomAppBar/>
        </CustomHeader>
    )
}

export default Header