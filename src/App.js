import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbartest from "./components/Navbartest";
import ProjectById from "./pages/ProjectById";
import BlogById from "./pages/BlogById";

export default function App() {
  return (
    <div className="App">
      <Navbartest />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectById />} />
        <Route path="/blog/:id" element={<BlogById />} />
      </Routes>
    </div>
  );
}
