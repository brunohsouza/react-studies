import { useEffect, useRef, useState } from 'react';

export function App() {
  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  return (
    <>
      <div>
        <h2>Use Ref Demo</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>Render Count: {count.current}</p>
      </div>
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
