import { Link, Route, Routes } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";

const RouterContainer = () =>{
    return(
        <div className="container">
            <div>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/contact">Contact</Link></li>
            </ul>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </div>
        </div>
    );
}

export default RouterContainer;