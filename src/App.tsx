import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import User from "./components/Users/User";
import TODO from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/todo" element={<TODO />} />
                <Route path="/" element={<User title="Fetched Data" />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
