import React from "react";
import styled from "styled-components";

import LogoIcon from "../assets/logo.png";

export default React.memo(function Logo() {
  return (
    <Container>
      <img src={LogoIcon} />
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

  img {
    width: 80px;
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

    img {
      width: 50px;
    }
  }
`;
