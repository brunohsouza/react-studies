import { Suspense, lazy } from 'react';
import Fruits from './fruits.jsx';

const Cars = lazy(() => import('./cars.jsx'));

export function App() {
  return (
    <div>
      <h1>Suspense Demo</h1>
      <Suspense fallback={<div>Loading fruits...</div>}>
        <Fruits />
      </Suspense>
      <Suspense fallback={<div>Loading cars...</div>}>
        <Cars />
      </Suspense>
    </div>

  )
}