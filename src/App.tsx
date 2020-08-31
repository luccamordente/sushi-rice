import React, { useState } from "react";
import styled from "styled-components";

import "reset-css";
import "./App.css";
import Logo from "./components/Logo";
import PeopleCount from "./components/PeopleCount";
import IngredientsList from "./components/IngredientsList";

const DEFAULT_PEOPLE_COUNT = 3;

export default function App() {
  const [peopleCount, setPeopleCount] = useState(DEFAULT_PEOPLE_COUNT);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Logo />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <PeopleCount
            defaultValue={DEFAULT_PEOPLE_COUNT}
            onChange={setPeopleCount}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IngredientsList peopleCount={peopleCount} />
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 1rem;
  min-height: 100vh;

  & > * {
    flex: 50%;
  }

  @media (max-width: 767.98px) {
    display: block;
    padding: 0.5rem;
  }
`;
