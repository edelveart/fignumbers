export const createArrOfFigNumbers = (
  lengthOfSequence: number,
  numberGenerator: Generator<number>,
) => {
  const numberSequence: number[] = [];
  for (let i = 0; i < lengthOfSequence; i++) {
    const { value } = numberGenerator.next();
    numberSequence.push(value);
  }
  return numberSequence;
};
