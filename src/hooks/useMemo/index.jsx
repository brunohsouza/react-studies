/**
 * useMemo Hook
 *
 * useMemo is a React hook that memoizes the result of an expensive computation,
 * recalculating it only when one of its dependencies changes. This prevents
 * unnecessary recalculations on every render, improving performance.
 *
 * Syntax:
 *   const memoizedValue = useMemo(() => computeExpensiveValue(dep), [dep]);
 *
 * - The first argument is a function that returns the computed value.
 * - The second argument is the dependency array. The function only re-runs
 *   when a value in this array changes between renders.
 *
 * How this example works:
 *   - There are two independent pieces of state: `count` and `todos`.
 *   - `expensiveCalculation` loops 1 billion times — it's intentionally slow.
 *   - `calculation` is wrapped in useMemo with `[count]` as its dependency.
 *     This means the heavy loop only runs again when `count` changes.
 *   - When "Add TODO" is clicked, `todos` state updates and the component
 *     re-renders, but `calculation` is NOT recomputed — useMemo returns the
 *     cached result because `count` did not change.
 *   - When "Increment" is clicked, `count` changes, so useMemo invalidates
 *     the cache and runs `expensiveCalculation` again.
 *
 * Without useMemo, every state change (including adding a todo) would trigger
 * the billion-iteration loop, causing a noticeable UI freeze.
 */
import { useMemo, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount(c => c + 1);
  }

  const addTodo = () => {
    setTodos(t => [...t, 'New Todo']);
  }

  return (
    <div>
      <div>
        <h1>useMemo Demo - My ToDos</h1>
        {todos.map((todo, index) => <p key={index}>{todo}</p>)}
        <button onClick={addTodo} >Add TODO - {calculation}</button>
      </div>
      <hr />
      <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <h2>Expensive Calculation: {calculation}</h2>
      </div>
    </div>
  );
}

function expensiveCalculation(num) {
  console.log('Calculating...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
}

export { App };
