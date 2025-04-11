import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import News from "./components/News";
import Demat from "./components/Demat";
import Course from "./components/Course";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/demat" element={<Demat />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
