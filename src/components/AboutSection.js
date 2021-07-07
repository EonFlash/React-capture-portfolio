import React from "react";
import home1 from "../img/home1.png";

import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>Dreams</span>
            </h2>
            <div className="hide">
              <h2>come true</h2>
            </div>
          </div>
          <p>Contact us for any type of photography or videography</p>
          <button>Contact Us</button>
        </div>
      </div>

      <div className="image">
        <img src={home1} alt="" />
      </div>
    </StyledAbout>
  );
};

//* Styled components

const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export default AboutSection;
