import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./List";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:userId" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
};

export default App;
