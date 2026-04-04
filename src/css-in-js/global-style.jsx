import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1 {
    color: white;
    background-color: purple;
    font-family: Arial, sans-serif;
  }

  .myparagraph {
    font-family: courier, monospace;
    color: blue;
  }
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Welcome!</h1>
      <p className="myparagraph">This paragraph is styled with global styles.</p>
    </>
  );
}