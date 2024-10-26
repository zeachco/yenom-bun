export function createCounter() {
  let count = $state(0);
  const incrementCount = () => ++count;

  return {
    get count() {
      return count;
    },
    incrementCount,
  };
}

export const globalCounter = createCounter();
