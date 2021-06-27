import React from "react";
import "./App.css";
// Importing background animation
import ParticleBackground from "./components/ParticleBackground";
// Importing components

const App = () => {
  return (
    <>
      <ParticleBackground />
      <div className="center-all">
        <h1>Hello React</h1>
      </div>
    </>
  );
};

export default App;
