import styles from './my-style.module.css';

export function Car() {
  return <h1 className={styles.bigred}>Hello Car!</h1>;
}

export function App() {
  return (
    <div>
      <button className={styles.primary}>Primary Button</button>
      <button className={styles.secondary}>Secondary Button</button>
    </div>
  );
}