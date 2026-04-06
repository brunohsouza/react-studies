import { Link, Route, Routes } from 'react-router-dom';
import { App as GlobalStyleDemo } from '../css-in-js/global-style.jsx';
import { App as CssInJsDemo } from '../css-in-js/index.jsx';
import { App as CarDemo } from '../css-modules/index.jsx';
import Header from '../css-style/index.jsx';
import MyForm from '../forms/index.jsx';
import { App as ForwardingDemo } from '../forward-ref/index.jsx';
import { App as HocDemo } from '../hoc/index.jsx';
import { App as UseContextDemo } from '../hooks/useContext/index.jsx';
import { Timer as UseEffectDemo } from '../hooks/useEffect/index.jsx';
import { Score as UseReducerDemo } from '../hooks/useReducer/index.jsx';
import { App as UseRefDomElement } from '../hooks/useRef/dom-elements.jsx';
import { App as UseRefDemo } from '../hooks/useRef/index.jsx';
import { FavoriteColor as UseStateDemo } from '../hooks/useState/index.jsx';
import { MyCar as MultipleStateDemo } from '../hooks/useState/multiple-state.jsx';
import { App as BubblingDemo } from '../portals/bubbling.jsx';
import { MyApp as PortalsDemo } from '../portals/index.jsx';
import { App as SassDemo } from '../sass/index.jsx';
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
          <li><Link to="/hoc">HOC Demo</Link></li>
          <li><Link to="/sass">Sass Demo</Link></li>
          <li><Link to="/use-state">Use State Demo</Link></li>
          <li><Link to="/multiple-state">Multiple State Demo</Link></li>
          <li><Link to="/use-effect">Use Effect Demo</Link></li>
          <li><Link to="/use-context">Use Context Demo</Link></li>
          <li><Link to="/use-ref">Use Ref Demo</Link></li>
          <li><Link to="/use-ref-dom-element">Use Ref DOM Element Demo</Link></li>
          <li><Link to="/use-reducer">Use Reducer Demo</Link></li>
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
      <Route path="/hoc" element={<HocDemo />} />
      <Route path="/sass" element={<SassDemo />} />
      <Route path="/use-state" element={<UseStateDemo />} />
      <Route path="/multiple-state" element={<MultipleStateDemo />} />
      <Route path="/use-effect" element={<UseEffectDemo />} />
      <Route path="/use-context" element={<UseContextDemo />} />
      <Route path="/use-ref" element={<UseRefDemo />} />
      <Route path="/use-ref-dom-element" element={<UseRefDomElement />} />
      <Route path="/use-reducer" element={<UseReducerDemo />} />
    </Routes>
  )
}

export default App