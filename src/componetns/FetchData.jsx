import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const fetchData = React.memo(() => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);
  const [counter, setCounter] = useState(0);

  const incremntNum = () => {
    setCounter((perv) => perv + 1);
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );

        setData(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  const longitemcount = useMemo(() => {
    console.log('aq itvleba sataurebis formlula');

    return data.filter((itme) => itme.title.length > 50).length;
  }, [data]);

  console.log('redering...');
  let count = 0;
  // for (let i = 0; i < 600000; i++) {
  //   count = count + 1;
  // }

  if (loading) {
    return <p>loading..</p>;
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Incremnt Number:{counter}</p>
      <button onClick={incremntNum}> ++ </button>

      <h2>fetching data</h2>
      <p>number of posts : {longitemcount}</p>
      <ul>
        {data.map((user) => (
          <li key={user.title}>{user.title}</li>
        ))}
      </ul>
    </>
  );
});

export default fetchData;
