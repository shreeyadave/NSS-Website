import "./App.css";
import GalleryView from "./components/Pages/Home/GalleryView";
import Events from "./components/Pages/Events";
import Gallery from "./components/Pages/Gallery";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Pages/Post";
import NewPost from "./components/Pages/NewPost";
import Admin from "./components/Pages/Admin/Admin";
import Alumni from "./components/Pages/Team/Alumni";
import AlumniBatchPage from "./components/Pages/Team/AlumniBatchPage";
import Contact from './components/Pages/Contact'
import Articles from "./components/Pages/Articles/Articles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/events" element={<Events />} />
        <Route path="/article" element={<Articles />} />
        <Route exact path="/team" element={<Alumni />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/team/:year" element={<AlumniBatchPage />} />
        <Route path="/events/:id" element={<Post />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
