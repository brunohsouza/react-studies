import { fetchFruitData } from './fruitsApi.js';

let status = 'pending';
let result;
const promise = fetchFruitData().then(data => {
  status = 'success';
  result = data;
}).catch(err => {
  status = 'error';
  result = err;
});

let fruitResource = {
  read() {
    if (status === 'pending') throw promise;
    if (status === 'error') throw result;
    return result;
  }
}

export default function MyFruits() {
  const fruits = fruitResource.read();

  return (
    <>
      <h1>Fruits</h1>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  )
}
