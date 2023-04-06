import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Fetail from "./routes/Fetail";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/movie/:id" element={<Fetail />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App();
