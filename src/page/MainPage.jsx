import Layout from "../component/layout/Layout.jsx";
import {Box} from "@mui/material";
import styled from "@emotion/styled";

const CustomBox = styled('div')`
`

function MainPage() {

    return (
        <Layout>
            <CustomBox>
                <Box component={"h1"}>Hello world</Box>
            </CustomBox>
        </Layout>
    );
}


export default MainPage;