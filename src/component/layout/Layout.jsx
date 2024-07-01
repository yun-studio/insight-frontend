import {Container} from "@mui/material";
import styled from "@emotion/styled";
import Header from "./header/Header.jsx";

const CustomContainer = styled(Container)`
    display: flex;
    justify-content: center;
`

function Layout({children}) {

    return (
        <>
            <Header/>
            <CustomContainer>
                <main>
                    {children}
                </main>
            </CustomContainer>
        </>
    )
}

export default Layout