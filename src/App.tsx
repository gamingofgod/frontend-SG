import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="text-4xl">Sample</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
