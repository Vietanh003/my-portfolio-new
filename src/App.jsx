import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import CV from "./pages/CV";
import Tools from "./pages/Tools";
import Weather from "./pages/tools/Weather";
import DiceGame from "./pages/tools/DiceGame";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/weather" element={<Weather />} />
        <Route path="/tools/dice" element={<DiceGame />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
