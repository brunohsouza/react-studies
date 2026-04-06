import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

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
