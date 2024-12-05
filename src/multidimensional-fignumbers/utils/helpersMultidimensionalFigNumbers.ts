export const risingFactorial = (n: number, k: number): number => {
  let t = 1;
  for (let i = n; i < n + k; i++) {
    t *= i;
  }
  return t;
};
