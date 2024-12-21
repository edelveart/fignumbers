export const factorialIter = (num: bigint): bigint => {
  let t: bigint = 1n;
  for (let i: bigint = 1n; i <= num; i++) {
    t *= i;
  }
  return t;
};

export const risingFactorial = (n: bigint, k: bigint): bigint => {
  let t: bigint = 1n;
  for (let i = n; i <= n + k - 1n; i++) {
    t *= i;
  }
  return t;
};

export const pseudoRisingFactorial = (n: bigint, k: bigint): bigint => {
  let t: bigint = 1n;
  for (let i = n; i <= n + k - 2n; i++) {
    t *= i;
  }
  return t;
};

export const binomialCoeff = (n: bigint, k: bigint): bigint => {
  return factorialIter(n) / (factorialIter(k) * factorialIter(n - k));
};
