import { Link, Route, Routes } from 'react-router-dom';
import { App as GlobalStyleDemo } from '../css-in-js/global-style.jsx';
import { App as CssInJsDemo } from '../css-in-js/index.jsx';
import { App as CarDemo } from '../css-modules/index.jsx';
import Header from '../css-style/index.jsx';
import MyForm from '../forms/index.jsx';
import { App as ForwardingDemo } from '../forward-ref/index.jsx';
import { App as BubblingDemo } from '../portals/bubbling.jsx';
import { MyApp as PortalsDemo } from '../portals/index.jsx';
import { App as SuspenseDemo } from '../suspense/index.jsx';
import { App as TransitionsDemo } from '../transitions/index.jsx';
import Info from './url-parameters.jsx';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/bubbling">Portals Bubbling</Link></li>
          <li><Link to="/suspense">Suspense</Link></li>
          <li><Link to="/css-header">CSS Style</Link></li>
          <li><Link to="/css-modules">CSS Modules</Link></li>
          <li><Link to="/css-in-js">CSS-in-JS</Link></li>
          <li><Link to="/css-global">Global Styles</Link></li>
          <li><Link to="/transitions">Transitions</Link></li>
          <li><Link to="/info/john">John's Info</Link></li>
          <li><Link to="/info/jane">Jane's Info</Link></li>
          <li><Link to="/forward-ref">Forward Ref</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forms" element={<MyForm />} />
      <Route path="/portals" element={<PortalsDemo />} />
      <Route path="/bubbling" element={<BubblingDemo />} />
      <Route path="/suspense" element={<SuspenseDemo />} />
      <Route path="/css-header" element={<Header />} />
      <Route path="/css-modules" element={<CarDemo />} />
      <Route path="/css-in-js" element={<CssInJsDemo />} />
      <Route path="/css-global" element={<GlobalStyleDemo />} />
      <Route path="/transitions" element={<TransitionsDemo />} />
      <Route path="/info/:firstname" element={<Info />} />
      <Route path="/forward-ref" element={<ForwardingDemo />} />
    </Routes>
  )
}

export default App