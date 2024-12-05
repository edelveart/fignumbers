export const createArrOfFigNumbers = (
  lengthOfSequence: bigint,
  numberGenerator: Generator<bigint>,
) => {
  const numberSequence: bigint[] = [];
  for (let i = 0; i < lengthOfSequence; i++) {
    const { value } = numberGenerator.next();
    numberSequence.push(value);
  }
  return numberSequence;
};

export const convertNumbersToBigInt = (listOfFigNumbers: number[]) => {
  return [...listOfFigNumbers].map((num) => BigInt(num));
};
