import { useState } from 'react';

export function MyCar() {
  const [brand, setBrand] = useState('Ford');
  const [model, setModel] = useState('Mustang');
  const [year, setYear] = useState(1964);
  const [color, setColor] = useState('red');

  return (
    <>
      <h1>My Car</h1>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Year: {year}</p>
      <p>Color: {color}</p>

      <button type='button' onClick={() => setBrand('Tesla')}>Change Brand</button>
      <button type='button' onClick={() => setModel('Model S')}>Change Model</button>
      <button type='button' onClick={() => setYear(2020)}>Change Year</button>
      <button type='button' onClick={() => setColor('blue')}>Change Color</button>
    </>
  )
}