export const RICE_GRAMS_PER_PERSON = 120;

export const gramsToPeople = (grams: number): number =>
  grams / RICE_GRAMS_PER_PERSON;

export const peopleToGrams = (people: number): number =>
  people * RICE_GRAMS_PER_PERSON;

// Quão perto de um inteiro a contagem de pessoas precisa estar para
// exibirmos o inteiro em vez de uma faixa (ex: "3" vs "3-4").
const PEOPLE_TOLERANCE = 0.25;

// Descreve quantas pessoas uma quantidade de pessoas (fracionária) serve.
// Próximo de um inteiro -> "serve 3 pessoas"; senão -> "serve 3-4 pessoas".
export const describeServings = (people: number): string => {
  if (!isFinite(people) || people <= 0) return "";

  const nearest = Math.round(people);
  if (nearest >= 1 && Math.abs(people - nearest) <= PEOPLE_TOLERANCE) {
    return `serve ${nearest} ${nearest === 1 ? "pessoa" : "pessoas"}`;
  }

  const low = Math.floor(people);
  const high = Math.ceil(people);
  return `serve ${low}-${high} pessoas`;
};
