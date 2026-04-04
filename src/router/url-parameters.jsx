import { Route, Routes, useParams } from 'react-router-dom';

export default function Info() {
  const { firstname } = useParams();
  return <h2>Info for {firstname}</h2>;
}

export function App() {
  return (
    <Routes>
      <Route path="/info/:firstname" element={<Info />} />
    </Routes>
  );
}