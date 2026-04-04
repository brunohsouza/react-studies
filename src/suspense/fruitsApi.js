export function fetchFruitData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Elderberry'
      ]);
    }, 2000);
  });
}
