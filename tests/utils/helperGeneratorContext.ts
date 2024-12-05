import { expect } from "vitest";

export const convertNumbersToBigInt = (listOfFigNumbers: number[]) => {
  return [...listOfFigNumbers].map((num) => BigInt(num));
};

export const compareExpectToEqual = (
  inputFigGenerator: Generator<bigint>,
  expectedResultArr: number[] | bigint[],
) => {
  const receivedGeneratorArr: bigint[] = [];

  for (let i = 0; i < expectedResultArr.length; i++) {
    const { value } = inputFigGenerator.next();
    receivedGeneratorArr.push(value);
  }

  if (expectedResultArr.every((num) => typeof num === "number")) {
    return expect(receivedGeneratorArr).toEqual(convertNumbersToBigInt(expectedResultArr));
  } else {
    return expect(receivedGeneratorArr).toEqual(expectedResultArr);
  }
};
