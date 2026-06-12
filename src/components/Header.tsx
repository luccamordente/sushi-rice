import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Nav, { Route } from "./Nav";

interface Props {
  readonly active: Route;
}

export default React.memo(function Header({ active }: Props) {
  return (
    <Container>
      <Logo />
      <Nav active={active} />
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;
