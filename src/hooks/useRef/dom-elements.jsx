import { useRef } from 'react';

export function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div>
        <h2>Use Ref DOM Elements Demo</h2>
        <input type="text" ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </>
  );
}