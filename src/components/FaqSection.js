import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../Styles";

const FaqSection = () => {
  return (
    <StyledFAQ>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            illo?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily schedule?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            illo?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Payment methods?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            illo?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Products?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            illo?
          </p>
          <div className="faq-line"></div>
        </div>
      </div>
    </StyledFAQ>
  );
};

const StyledFAQ = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
  }

  .question {
    cursor: pointer;
    padding: 3rem 0rem;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
