import React from "react";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import ServicesSection from "../components/ServicesSection";
import CompaniesSection from "../components/CompaniesSection";
import UISection from "../components/UISection";
import GetStartedBanner from "../components/GetStartedBanner";
import "../styles/Home/Home.scss";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <MainSection />
      <ServicesSection />
      <CompaniesSection />
      <UISection />

      <GetStartedBanner />
    </div>
  );
}

export default Home;
