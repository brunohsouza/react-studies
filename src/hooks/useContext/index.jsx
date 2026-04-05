import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function App() {
  const [user, setUser] = useState('John Doe');

  return (
    <UserContext.Provider value={user}>
      <h1>Welcome to the User Context Demo</h1>
      <UserProfile />
      <button onClick={() => setUser('Jane Smith')}>Change User</button>
    </UserContext.Provider>
  );
}

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user}</p>
    </div>
  );
}

function UserProfile2() {
  const user = useContext(UserContext);

  return (
    <>
      <div>
        <h2>User Profile 2</h2>
        <UserProfile />
        <p>Name: {user}</p>
      </div>
    </>
  );
}