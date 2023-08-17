export function generateCombinations(n: number, k: number): number[][] {
  return generateAllCombos(n, k);
}

function generateAllCombos(
  n: number,
  k: number,
  startCursor: number = 1,
  combinationsAcc: number[][] = [],
  currentCombination: number[] = []
): number[][] {
  if (k === 0) {
    if (currentCombination.length > 0) {
      combinationsAcc.push(currentCombination.slice());
    }
    return combinationsAcc;
  }
  const endCursor = n - k + 2;
  for (let i = startCursor; i < endCursor; i++) {
    currentCombination.push(i);
    generateAllCombos(n, k - 1, i + 1, combinationsAcc, currentCombination);
    currentCombination.pop();
  }
  return combinationsAcc;
}
