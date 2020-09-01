import React from "react";
import styled from "styled-components";

import SushiRice from "../assets/logo.svg";

export default React.memo(function Logo() {
  return (
    <Container>
      <SushiRice />
      <div>
        <span className="primary">Sushi Rice</span>{" "}
        <span className="secondary">Calculator</span>
      </div>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 55px;
  align-items: center;

  svg {
    width: 50px;
    margin-right: 0.2em;
  }

  .primary {
    color: #fff;
    font-family: "Ceviche One";
    font-size: 1em;
  }

  .secondary {
    color: #bd0b07;
    font-family: "Russo One";
    font-size: 0.5em;
  }

  @media (max-width: 767.98px) {
    font-size: 35px;
    justify-content: center;

    svg {
      width: 33px;
    }
  }
`;
