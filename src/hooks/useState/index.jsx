import { useState } from 'react';

export function FavoriteColor() {
  const [color, setColor] = useState('red');

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type='button' onClick={() => setColor('blue')}>Change to Blue</button>
      <button type='button' onClick={() => setColor('green')}>Change to Green</button>
    </>
  );
}
