import React from "react";
import Navbar from "./Navbar";
import "../styles/Home/Home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="main_container">
        <div className="main_container_data">
          <div className="main_container_data_title">
            Simply explained with illustrations
          </div>
          <div className="main_container_data_info">
            There are a lot of different components that will help you create
            the perfect look for your project
          </div>
          <div className="main_container_data_buttons">
            <div className="main_button_getStarted">Get Started</div>
            <div className="main_button_learnMore">Learn More</div>
          </div>
        </div>
        <div className="main_container_image">
          <div className="image">
            <img src={require("../assets/rocket.png")} alt="rocket" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
