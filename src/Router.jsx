import {BrowserRouter, Route, Routes} from "react-router-dom";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={"Hello World!"}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router