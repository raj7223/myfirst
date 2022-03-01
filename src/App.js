import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function app() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default app;
