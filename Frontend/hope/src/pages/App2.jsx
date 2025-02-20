
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import  Contact from "./pages/Contact";
import About from "./pages/About";
import Bible from "./pages/Bible";
import Locate from "./pages/Locate";
import Ministries from "./pages/Ministries";
import Give from "./pages/Give";
import Branches from "./pages/Branches";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/bible" element={<Bible />} />
          <Route path="/about" element={<About />} />
          <Route path="/locate" element={<Locate />} />
          <Route path="/ministries" element={<Ministries/>} />
          <Route path="/give" element={<Give/>} />
          <Route path="/details/Branches" element={<Branches/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}