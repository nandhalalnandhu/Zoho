import React from "react";
import "./Home.css";
import Form from "../HeroAside/Form";
import { DownloadSide } from "../HeroBside/DownloadSide";

const Home = () => {
  return (
    <div className="Home">
      <div className="A">
        <Form />
      </div>
      <div className="B">
        <DownloadSide/>
      </div>
    </div>
  );
};

export default Home;
