import { useState } from 'react';
import FetchData from './componetns/FetchData';

function App() {
  const [showFetchData, setShowFetchData] = useState(false);

  const [counter, setCounter] = useState(0);

  const ToggleFetchData = () => {
    setShowFetchData((perv) => !perv);
  };

  const incremntNum = () => {
    setCounter((perv) => perv + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>Incremnt Number:{counter}</p>
      <button onClick={incremntNum}> ++ </button>

      <button onClick={ToggleFetchData}>toggle</button>

      {showFetchData && <FetchData />}
    </>
  );
}

export default App;
