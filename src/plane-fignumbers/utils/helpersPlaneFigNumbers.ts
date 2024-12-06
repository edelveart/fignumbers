export const log2BigInt = (delta: bigint) => {
  if (delta <= 0n) {
    throw new Error("Parameter 'delta' must be greater than 0n");
  }

  let log2OfDelta: bigint = 0n;
  while (delta > 1n) {
    delta /= 2n;
    log2OfDelta += 1n;
  }

  return log2OfDelta;
};
