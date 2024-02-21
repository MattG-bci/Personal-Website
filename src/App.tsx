import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";

import Overfitting from "./components/blogs/Overfitting";
import Home from "./Home";
import FrameSearchAPI from "./components/projects/FrameSearchAPI";
import RoboLecturer from "./components/projects/Robolecturer";
import SceneRepresentation from "./components/projects/SceneRepresentation";
import DataPreprocessing from "./components/blogs/DataPreprocessing";

export default function App() {
  return (
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/components">
          <Route path="/components/blogs">
            <Route path="/components/blogs/Overfitting" element={<Overfitting />}/>
            <Route path="/components/blogs/DataPreprocessing" element={<DataPreprocessing />}/>
          </Route>
          <Route path="/components/projects">
            <Route path="/components/projects/FrameSearchAPI" element={<FrameSearchAPI />} />
            <Route path="/components/projects/RoboLecturer" element={<RoboLecturer />} />
            <Route path="/components/projects/SceneRepresentation" element={<SceneRepresentation />} />
          </Route>
        </Route>
    </Routes>
);
}