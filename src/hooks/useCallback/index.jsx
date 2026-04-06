/**
 * useCallback Hook — Memoizing Functions to Prevent Unnecessary Re-renders
 *
 * WHAT IT DOES:
 * useCallback(fn, deps) returns a memoized version of the callback function `fn`.
 * React will return the SAME function reference between renders as long as the
 * values in the `deps` (dependencies) array have not changed.
 *
 * WHY IT MATTERS:
 * In React, every re-render creates new function instances. When a parent
 * re-renders, its inline functions get recreated with new references — even if
 * their logic hasn't changed. This causes child components that receive those
 * functions as props to re-render unnecessarily, even when wrapped in React.memo.
 *
 * HOW THIS EXAMPLE WORKS:
 * - `WithCallbackExample` has two independent counters: `count1` and `count2`.
 * - `handleClick1` depends only on `count1`, so it is only recreated when
 *   `count1` changes. When Button 2 is clicked, `handleClick1` keeps the same
 *   reference → Button 1 does NOT re-render.
 * - `handleClick2` depends only on `count2`, so the same logic applies in reverse.
 * - `Button` is wrapped in `React.memo`, which skips re-rendering if its props
 *   haven't changed. useCallback makes this optimization actually work: without
 *   it, every parent render would produce a new function reference, causing
 *   React.memo to always re-render the buttons anyway.
 *
 * WHEN TO USE:
 * - Passing callbacks to memoized child components (React.memo).
 * - Passing callbacks as dependencies to useEffect or other hooks where a
 *   stable reference is required to avoid infinite loops.
 *
 * WHEN NOT TO USE:
 * - For every function by default — useCallback itself has a cost (memoization
 *   overhead). Only use it when re-renders of the child are measurably expensive
 *   or when a stable reference is functionally required.
 */
import React, { useCallback, useState } from 'react';

// Child component that receives a callback function as a prop
const Button = React.memo(({onClick, text}) => {
  console.log(`Rendering button: ${text}`);
  return <button onClick={onClick}>{text}</button>;
});

// Parent component that uses useCallback to memoize the click handler
export default function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // These functions are memoized and only recreated when deps change
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  console.log('Parent rendered');

  return (
    <div>
      <h2>With Callback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  )
};