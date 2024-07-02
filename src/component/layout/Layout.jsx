import {Box, Container} from "@mui/material";
import styled from "@emotion/styled";
import Header from "./header/Header.jsx";

const LayoutContainer = styled(Box)`
    max-width: 430px;
    margin: auto;
`

const CustomContainer = styled(Container)`
    display: flex;
    justify-content: center;
`

function Layout({children}) {

    return (
        <LayoutContainer>
            <Header/>
            <CustomContainer>
                <main>
                    {children}
                </main>
            </CustomContainer>
        </LayoutContainer>
    )
}

export default Layout