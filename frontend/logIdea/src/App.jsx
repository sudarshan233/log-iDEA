import {Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import ViewIdeasPage from "./Pages/ViewIdeasPage.jsx";
import CreatePage from "./Pages/CreatePage.jsx";

import "./index.css"

const App = () => {
    return (
        <div className="bg-background-color min-h-screen">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/idea" element={<ViewIdeasPage />} />
            </Routes>
        </div>
    )
}

export default App;