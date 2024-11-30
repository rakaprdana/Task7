import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "boxicons/css/boxicons.min.css";
import ProjectDetail from "./pages/ProjectDetail";
import GalleryPage from "./pages/Gallery";

function App() {
  return (
    <>
      <Router>
        <div className="bg-stone-900 text-gray-200 font-Poppins">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
