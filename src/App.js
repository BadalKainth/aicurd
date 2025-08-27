import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbartest from "./components/Navbartest";
import ProjectById from "./pages/ProjectById";
import BlogById from "./pages/BlogById";
import Profile from "./pages/Profile";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <div className="App">
      <Navbartest />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects/:id" element={<ProjectById />} />
        <Route path="/blog/:id" element={<BlogById />} />
      </Routes>
    </div>
  );
}
