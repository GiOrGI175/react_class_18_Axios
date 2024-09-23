import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await res.json();

        setUsers(data);

        // console.log(data);

        if (!res.ok) throw new Error('Networkin res was not ok');
      } catch (error) {
        console.error(`This is my error: ${error}`);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  const fetchByUser = async (id) => {
    console.log(id);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      const data = await res.json();

      setUser(data);

      // console.log(data);

      if (!res.ok) throw new Error('Networkin res was not ok');
    } catch (error) {
      console.error(`This is my error: ${error}`);
    }
  };

  return (
    <>
      <div>
        <h1>Users list</h1>

        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => fetchByUser(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>

        {user && (
          <div>
            <h2>User Data</h2>

            <p>
              <strong>Name:</strong>
              {user.name}
            </p>
            <p>
              <strong>Name:</strong>
              {user.email}
            </p>
            <p>
              <strong>Name:</strong>
              {user.address.city} , {user.address.street}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
