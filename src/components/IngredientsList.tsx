import React from "react";
import styled from "styled-components";

interface Props {
  readonly peopleCount: number;
}

export default function IngredientsList({ peopleCount }: Props) {
  return (
    <Container>
      <h1>
        Ingredientes <small>Para {peopleCount} pessoas</small>
      </h1>

      <List>
        <Item>
          <Name>Arroz</Name>
          <Amount>{Math.round(peopleCount * 240 * 0.6 * (200 / 240))}</Amount>
          <Unit>g</Unit>
        </Item>
        <Item>
          <Name>Água</Name>
          <Amount>{Math.round(peopleCount * 240 * 0.66 * (240 / 240))}</Amount>
          <Unit>g</Unit>
        </Item>
        <Item>
          <Name>Vinagre</Name>
          <Amount>{Math.round(peopleCount * 240 * 0.1 * (230 / 240))}</Amount>
          <Unit>g</Unit>
        </Item>
        <Item>
          <Name>Açúcar</Name>
          <Amount>{Math.round(peopleCount * 14.79 * 0.8 * (200 / 240))}</Amount>
          <Unit>g</Unit>
        </Item>
        <Item>
          <Name>Dashi</Name>
          <Amount>{Math.round(peopleCount * 14.79 * 0.2 * (3 / 4.39))}</Amount>
          <Unit>g</Unit>
        </Item>
        <Item>
          <Name>Sal</Name>
          <Amount>{Math.round(peopleCount * 4.93 * 0.1 * (97 / 80))}</Amount>
          <Unit>g</Unit>
        </Item>
      </List>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  color: #3a3a3a;
  text-transform: lowercase;
  padding: 2rem;

  h1 {
    color: #b9b9b9;
    font-size: 2rem;
    font-family: "Ropa Sans", sans-serif;
    margin-bottom: 1rem;

    small {
      font-size: 1rem;
    }
  }

  @media (max-width: 767.98px) {
    width: 100%;
    padding: 1rem;

    h1 {
      small {
        display: block;
      }
    }
  }
`;

const List = styled.div`
  font-family: "Finger Paint", serif;
  min-width: 20rem;

  @media (max-width: 767.98px) {
    min-width: initial;
  }
`;

const Item = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8rem 1.2rem;
  @media (max-width: 767.98px) {
    padding: 0.6rem 1rem;
  }
`;
const Name = styled.div`
  flex: 1 1 auto;
  font-size: 1.3rem;
`;
const Amount = styled.div`
  flex: 1 1 auto;
  font-size: 1.8rem;
  text-align: right;
`;
const Unit = styled.div`
  flex: 0 1 auto;
  font-size: 0.8rem;
  padding-left: 0.4rem;
`;
