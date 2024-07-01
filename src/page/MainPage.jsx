import Layout from "../component/layout/Layout.jsx";
import {Box} from "@mui/material";
import styled from "@emotion/styled";
import {useState} from "react";
import SearchBar from "../component/SearchBar.jsx";
import QuestionList from "../component/QuestionList.jsx";

const CustomBox = styled(Box)`
`

function MainPage() {

    const [questions, setQuestions] = useState([])

    return (
        <Layout>
            <CustomBox>
                <Box component={"h1"}>Hello world</Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <SearchBar setQuestions={setQuestions}/>
                </Box>
                <QuestionList questions={questions}/>
            </CustomBox>
        </Layout>
    );
}


export default MainPage;