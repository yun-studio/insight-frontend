import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage.jsx";
import QuestionPage from "./page/QuestionPage.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/questions" element={<QuestionPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router