import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";

import Overfitting from "./components/overfitting";
import Home from "./Home";

export default function App() {
  return (
    <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/overfitting" element={<Overfitting />}/>
    </Routes>
);
}