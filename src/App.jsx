import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./component/Pages/Home";
import { Users } from "./component/Pages/Users";
import { Post } from "./component/Pages/Post";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts/:id" element={<Post />} />
            </Routes>
        </BrowserRouter>
    );
}