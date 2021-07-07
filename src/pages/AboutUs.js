import React from "react";

//Page components
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";

const AboutUs = () => {
  return (
    <>
      //* This acts like a div but does not render out like a div
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </>
  );
};

export default AboutUs;
