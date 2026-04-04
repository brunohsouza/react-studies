import styled from 'styled-components';

const Button =  styled.button`
  background: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.$primary ? '#007BFF' : '#6c757d'};

  &:hover {
    background: #0056b3;
  }
`;

export function App() {
  return (
    <div>
      <h1>Hello CSS-in-JS!</h1>
      <Button $primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </div>
  );
}