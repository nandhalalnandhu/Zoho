import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import DownloadData from "./components/DownloadData/DownloadData";

function App() {
  return (
    <div className="homepage">
      <div className="homeA">
        <Navbar />
        <Home />
      </div>
      <div className="homeB">
        <DownloadData />
      </div>
    </div>
  );
}

export default App;
