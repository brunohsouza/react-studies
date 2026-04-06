/**
 * Home - Example component demonstrating the useFetch custom hook.
 *
 * Calls useFetch with a JSONPlaceholder todos endpoint. While the data is still
 * loading, `data` is null so nothing is rendered. Once the fetch resolves, the
 * component maps over the todo array and renders each item's title and
 * completion status as a block of JSX.
 *
 * This example shows how useFetch encapsulates the fetch + state logic so the
 * component itself stays focused purely on rendering.
 */
import useFetch from './useFetch.js';

const Home = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <>
      {data && data.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </>
  )
}

export { Home };
