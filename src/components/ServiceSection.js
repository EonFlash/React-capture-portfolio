import React from "react";
import styled from "styled-components";
//import icons
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";

import home2 from "../img/home2.png";

import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../Styles";

const ServiceSection = () => {
  return (
    <div>
      <Services>
        <StyledImage>
          <img src={home2} alt="" />
        </StyledImage>
        <StyledDescription>
          <h2>
            High <span>Quality</span> services
          </h2>
          <StyledCards>
            <StyledCard>
              <div className="icon">
                <img src={clock} alt="clock logo" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </StyledCard>
            <StyledCard>
              <div className="icon">
                <img src={teamwork} alt="team logo" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </StyledCard>
            <StyledCard>
              <div className="icon">
                <img src={diaphragm} alt="dia logo" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </StyledCard>
            <StyledCard>
              <div className="icon">
                <img src={money} alt="money logo" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </StyledCard>
          </StyledCards>
        </StyledDescription>
      </Services>
    </div>
  );
};

const Services = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServiceSection;
