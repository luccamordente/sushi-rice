import React, { useCallback, ChangeEvent, useState } from "react";
import styled from "styled-components";

interface Props {
  readonly defaultValue: number;
  readonly onChange: (count: number) => void;
}

const PeopleCount = ({ defaultValue, onChange }: Props) => {
  const [peopleCount, setPeopleCount] = useState(`${defaultValue}`);

  const handleCountChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setPeopleCount(value);

      const count = parseInt(value);
      if (isNaN(count)) return;
      onChange(count);
    },
    [onChange]
  );

  return (
    <Container>
      <label htmlFor="people-count-input">Sushi para quantas pessoas?</label>
      <input
        id="people-count-input"
        type="text"
        value={peopleCount}
        onChange={handleCountChanged}
        pattern="[0-9]*"
      />
    </Container>
  );
};

export default React.memo(PeopleCount);

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
    width: 16rem;

    &:invalid {
      opacity: 0.6;
    }
  }
`;
