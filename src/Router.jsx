import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router