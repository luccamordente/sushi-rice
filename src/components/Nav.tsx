import React from "react";
import styled from "styled-components";

export type Route = "home" | "preparo";

interface Props {
  readonly active: Route;
}

export default React.memo(function Nav({ active }: Props) {
  return (
    <Container>
      <Link href="#/" className={active === "home" ? "active" : ""}>
        Calculadora
      </Link>
      <Link href="#/preparo" className={active === "preparo" ? "active" : ""}>
        Modo de preparo
      </Link>
    </Container>
  );
});

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 1rem 0;
  font-family: "Ropa Sans", sans-serif;
`;

const Link = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-decoration: none;
  text-transform: lowercase;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.2rem;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
    border-bottom-color: #fff;
  }
`;
