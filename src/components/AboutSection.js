import React from "react";
import home1 from "../img/home1.png";

import styled from "styled-components";

import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../Styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              Your <span>Dreams</span>
            </h2>
            <StyledHide>
              <h2>come true</h2>
            </StyledHide>
          </StyledHide>
          <p>Contact us for any type of photography or videography</p>
          <button>Contact Us</button>
        </div>
      </StyledDescription>

      <StyledImage>
        <img src={home1} alt="" />
      </StyledImage>
    </StyledAbout>
  );
};

//* Styled components

export default AboutSection;
