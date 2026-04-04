import './myStyle.scss';

export function App() {
  return (
    <div>
      <h1>Hello Sass!</h1>
      <p>This is a simple example of using Sass in a React application.</p>
      <h2>Features:</h2>
      <div>
        <ul>
          <li>Variables</li>
          <li>Nesting</li>
          <li>Partials</li>
          <li>Mixins</li>
          <li>Inheritance</li>
      </ul>
      </div>
      <h3>Example of a mixin:</h3>
      <div className="box">
        This box is styled using a mixin!
      </div>
    </div>
  );
}