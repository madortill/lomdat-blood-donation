import { useState } from "react";
import "./App.css";
import OpenScreen from "./components/OpenScreen";
import { Routes, Route } from "react-router-dom";
import logo1 from "./assets/images/logos/one.png";
import logo2 from "./assets/images/logos/two.png";
import logo3 from "./assets/images/logos/three.png";
import InfoScreen from "./components/InfoScreen";

function App() {
  return (
    <div className="app">
      <div className="logos-container">
        <img src={logo1} className="logo" alt="logo" />
        <img src={logo2} className="logo" alt="logo" />
        <img src={logo3} className="logo" alt="logo" />
      </div>

      <Routes>
        <Route path="/" element={<OpenScreen />} />
        <Route path="/InfoScreen" element={<InfoScreen />} />
      </Routes>
    </div>
  );
}

export default App;
