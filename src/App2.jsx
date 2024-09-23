import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from './api';

const App2 = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const res = await axios.get(
        //   'https://jsonplaceholder.typicode.com/users'
        // );

        // console.log(res);

        const res = await api.get('/users');

        setUsers(res.data);
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
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setUser(res.data);
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

export default App2;
