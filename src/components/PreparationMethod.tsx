import React from "react";
import styled from "styled-components";

import Header from "./Header";

interface Step {
  readonly title: string;
  readonly description: string;
  readonly time?: string;
  readonly tip?: string;
}

const STEPS: ReadonlyArray<Step> = [
  {
    title: "Lave o arroz",
    description:
      "Coloque o arroz numa tigela grande, cubra com água fria, mexa com as mãos e escorra. Repita 3 a 4 vezes, até a água sair clara.",
    tip: "Esfregue levemente os grãos para soltar o amido.",
  },
  {
    title: "Deixe de molho",
    time: "30 min",
    description:
      "Transfira o arroz para a panela, adicione a água e deixe de molho por pelo menos 30 minutos. O arroz fica mais branco e a água, clara.",
  },
  {
    title: "Prepare o vinagre de sushi",
    description:
      "Numa panela pequena, junte o vinagre de arroz, o açúcar, o sal e o dashi. Aqueça em fogo baixo, mexendo até dissolver. Reserve para esfriar.",
    tip: "Não deixe ferver, para não perder o sabor.",
  },
  {
    title: "Cozinhe o arroz",
    time: "15 min + 15 min de descanso",
    description:
      "Tampe a panela e leve ao fogo alto. Quando ferver, abaixe o fogo e cozinhe por 15 minutos sem destampar. Desligue e deixe descansar tampado por mais 15 minutos.",
    tip: "O tempo de preparo pode variar. Evite levantar a tampa durante o cozimento.",
  },
  {
    title: "Tempere o arroz",
    description:
      "Transfira o arroz para uma tigela larga (de madeira, se tiver). Despeje o vinagre de sushi frio por cima e misture com movimentos de corte, sem amassar os grãos. Deixe chegar à temperatura ambiente.",
  },
];

export default function PreparationMethod() {
  return (
    <Layout>
      <Header active="preparo" />

      <Card>
        <h1>Modo de preparo</h1>

        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/I4vMelOsHfg"
            title="How To Make Sushi Rice"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>

        <Steps>
          {STEPS.map((step, index) => (
            <Step key={step.title}>
              <Number>{index + 1}</Number>
              <Content>
                <StepTitle>
                  {step.title}
                  {step.time && <Time>⏱ {step.time}</Time>}
                </StepTitle>
                <p>{step.description}</p>
                {step.tip && <Tip>Dica: {step.tip}</Tip>}
              </Content>
            </Step>
          ))}
        </Steps>
      </Card>
    </Layout>
  );
}

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 1rem;
  min-height: 100vh;

  @media (max-width: 767.98px) {
    padding: 0.5rem;
  }
`;

const Card = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  color: #3a3a3a;
  text-transform: lowercase;
  padding: 3rem 2rem;
  margin: 1rem auto 0;
  width: 100%;
  max-width: 48rem;

  h1 {
    color: #b9b9b9;
    font-size: 2.4rem;
    font-family: "Ropa Sans", sans-serif;
    margin-bottom: 2rem;
  }

  @media (max-width: 767.98px) {
    padding: 2rem 1rem;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  margin-bottom: 2.5rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Steps = styled.ol`
  list-style: none;
`;

const Step = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.4rem 0;

  &:last-child {
    border-bottom: none;
  }
`;

const Number = styled.div`
  flex: 0 0 auto;
  width: 2.6rem;
  height: 2.6rem;
  margin-right: 1.2rem;
  border-radius: 50%;
  background-color: #e53935;
  color: #fff;
  font-family: "Finger Paint", serif;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex: 1 1 auto;

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

const StepTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
  font-family: "Finger Paint", serif;
  font-size: 1.9rem;
  margin-bottom: 0.6rem;
`;

const Time = styled.span`
  background-color: #f2f2f2;
  color: #666;
  font-family: "Ropa Sans", sans-serif;
  font-size: 1.1rem;
  padding: 0.2rem 0.7rem;
  border-radius: 1rem;
`;

const Tip = styled.p`
  color: #b9b9b9;
  font-style: italic;
  margin-top: 0.6rem;
`;
