import "./App.css";
import GalleryView from "./components/GalleryView";
import Gallery from "./components/Pages/Gallery";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
