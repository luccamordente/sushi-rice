import React, { useCallback, ChangeEvent, useMemo, useState } from "react";
import styled from "styled-components";

import {
  RICE_GRAMS_PER_PERSON,
  gramsToPeople,
  describeServings,
} from "../rice";

type Mode = "people" | "rice";

interface Props {
  readonly defaultValue: number; // contagem padrão de pessoas
  readonly onChange: (count: number) => void;
}

// Converte o texto digitado, no modo atual, para uma contagem de pessoas.
// Retorna NaN quando o valor é inválido (vazio, não numérico ou <= 0).
const textToPeople = (value: string, mode: Mode): number => {
  const parsed = parseFloat(value);
  if (isNaN(parsed) || parsed <= 0) return NaN;
  return mode === "people" ? parsed : gramsToPeople(parsed);
};

// Formata um número para preencher o input ao trocar de modo, sem
// arrastar casas decimais longas (ex: 3.3333 -> "3.33").
const formatInput = (n: number): string => {
  if (!isFinite(n)) return "";
  return `${Math.round(n * 100) / 100}`;
};

const AmountInput = ({ defaultValue, onChange }: Props) => {
  const [mode, setMode] = useState<Mode>("people");
  const [text, setText] = useState(`${defaultValue}`);

  const handleChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      // No modo arroz só permitimos inteiros: descarta decimais e não-dígitos.
      const value =
        mode === "rice"
          ? event.target.value.replace(/[^0-9]/g, "")
          : event.target.value;
      setText(value);

      const people = textToPeople(value, mode);
      if (isNaN(people)) return;
      onChange(people);
    },
    [mode, onChange]
  );

  const switchMode = useCallback(
    (next: Mode) => {
      if (next === mode) return;

      // Preserva o valor atual convertido para o novo modo.
      const people = textToPeople(text, mode);
      if (!isNaN(people)) {
        const nextValue =
          next === "people"
            ? people
            : Math.round(people * RICE_GRAMS_PER_PERSON);
        setText(formatInput(nextValue));
      }

      setMode(next);
    },
    [mode, text]
  );

  const servings = useMemo(() => {
    if (mode !== "rice") return null;
    const people = textToPeople(text, mode);
    if (isNaN(people)) return null;
    return describeServings(people);
  }, [mode, text]);

  return (
    <Container>
      <Tabs>
        <Tab
          type="button"
          $active={mode === "people"}
          onClick={() => switchMode("people")}
        >
          Pessoas
        </Tab>
        <Tab
          type="button"
          $active={mode === "rice"}
          onClick={() => switchMode("rice")}
        >
          Arroz
        </Tab>
      </Tabs>

      <label htmlFor="amount-input">
        {mode === "people"
          ? "Sushi para quantas pessoas?"
          : "Quantos gramas de arroz?"}
      </label>
      <input
        id="amount-input"
        type="text"
        value={text}
        onChange={handleChanged}
        inputMode="numeric"
        pattern={mode === "people" ? "[0-9]*\\.?[0-9]*" : "[0-9]*"}
      />
      {/* Sempre renderiza para reservar a altura e não empurrar o conteúdo
          acima ao alternar entre pessoas/arroz. */}
      <Servings>{servings || " "}</Servings>
    </Container>
  );
};

export default React.memo(AmountInput);

const Container = styled.div`
  font-family: "Ropa Sans", sans-serif;
  padding: 2rem;

  label {
    color: rgba(0, 0, 0, 0.6);
    display: block;
    font-size: 1.7rem;
    margin-bottom: 1em;
    text-transform: lowercase;
  }

  input {
    padding: 1rem 1rem;
    background-color: #000;
    border-radius: 25px;
    border: none;
    color: #fff;
    display: block;
    font-family: "Play";
    font-size: 10em;
    text-align: center;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    width: 28.8rem;

    &:invalid {
      opacity: 0.6;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  cursor: pointer;
  border: none;
  border-radius: 999px;
  padding: 0.6rem 1rem;
  font-family: "Ropa Sans", sans-serif;
  font-size: 1.2rem;
  text-transform: lowercase;
  background-color: ${({ $active }) => ($active ? "#000" : "rgba(0, 0, 0, 0.08)")};
  color: ${({ $active }) => ($active ? "#fff" : "rgba(0, 0, 0, 0.6)")};
  transition: background-color 0.15s ease, color 0.15s ease;
`;

const Servings = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Ropa Sans", sans-serif;
  font-size: 1.3rem;
  margin-top: 1em;
  /* Reserva uma linha fixa para o texto não empurrar o layout ao aparecer. */
  min-height: 1.3em;
  text-align: center;
  text-transform: lowercase;
`;
