import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function PortalButton({ onClick, children }) {
  return createPortal(
    <button onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        background: '#007BFF',
        color: 'white',
      }}
    >
      {children}
    </button>,
    document.body
  );
}

export function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return(
    <div
      style={{
        padding: '20px',
        border: '2px solid #000',
        margin: '20px'
      }}
      onClick={() => {
        setCount1(c => c +1);
      }}>
      <h2>Div Clicked: {count1}</h2>
      <h2>Button Clicked: {count2}</h2>
      <p>The floating button is rendered outside this box using a portal,
        but its clicks still bubble up to this parent div.</p>
      <p>Try clicking the button to see the count increment.</p>
      <PortalButton onClick={() => setCount2(c => c + 1)}>
        Click Me
      </PortalButton>
    </div>
  );
}