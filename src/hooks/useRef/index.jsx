/**
 * NOTE: Breaking change in React 19 + @types/react v19
 *
 * In React 18, `useRef(initialValue)` returned `MutableRefObject<T>` with a
 * writable `.current` property, making it safe to both mutate and read in JSX.
 *
 * In React 19, all `useRef` overloads now return `RefObject<T>`. Additionally,
 * `eslint-plugin-react-hooks` v5 introduced the `react-hooks/refs` rule, which
 * forbids reading `ref.current` directly inside JSX. The rationale: refs are
 * not reactive — mutating `.current` does NOT trigger a re-render, so a value
 * read from a ref in JSX will be stale until the next unrelated render.
 *
 * To work around this and still display the render count, a separate `useState`
 * variable (`renderCount`) is used to hold the value for display, while the
 * `useRef` (`count`) is kept as the underlying mutable counter.
 */
import { useEffect, useRef, useState } from 'react';

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [renderCount, setRenderCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
    setRenderCount(count.current);
  }, [inputValue]);

  return (
    <>
      <div>
        <h2>Use Ref Demo</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>Render Count: {renderCount}</p>
      </div>
      <h1>Render Count: {renderCount}</h1>
    </>
  );
}
