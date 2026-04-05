import { useEffect, useState } from 'react';

const MAX_COUNT = 10; // To prevent infinite loop, this is the maximum count we want to reach

export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= MAX_COUNT) return;
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return <h1>I've rendered {count} times!</h1>;
 }

export function App() {
  return (
    <div>
      <h1>useEffect Demo</h1>
      <Timer />
    </div>
  )
}