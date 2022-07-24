import React from "react";
import { HomeStyled } from "../styles/Home";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import ServicesSection from "../components/ServicesSection";
import CompaniesSection from "../components/CompaniesSection";
import UISection from "../components/UISection";
import GetStartedBanner from "../components/GetStartedBanner";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
function Home() {
  return (
    <HomeStyled>
      <Navbar />
      <MainSection />
      <ServicesSection />
      <CompaniesSection />
      <UISection />
      <GetStartedBanner />
      <BlogSection />
      <Footer />
    </HomeStyled>
  );
}

export default Home;
