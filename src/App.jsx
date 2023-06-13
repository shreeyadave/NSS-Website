import "./App.css";
import GalleryView from "./components/GalleryView";
import Events from "./components/Pages/Events";
import Gallery from "./components/Pages/Gallery";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
