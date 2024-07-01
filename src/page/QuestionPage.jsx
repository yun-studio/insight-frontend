import {useSearchParams} from "react-router-dom";
import SearchBar from "../component/SearchBar.jsx";
import QuestionList from "../component/QuestionList.jsx";
import Layout from "../component/layout/Layout.jsx";
import useSearchQuestion from "../hook/useSearchQuestion.jsx";

function QuestionPage() {

    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')
    const {data} = useSearchQuestion(query);

    return (
        <Layout>
            <SearchBar/>
            <QuestionList questions={data?.data?.data?.content ?? []}/>
        </Layout>
    );
}

export default QuestionPage;