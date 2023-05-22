import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import Add from "./pages/Add/Add"
import Detail from "./pages/Detail/Detail"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Wishlist from "./pages/Wishlist/Wishlist";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
                <Route path="/add" element={<Add />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
