import { useState } from 'react';
import FetchData from './componetns/FetchData';

function App() {
  const [showFetchData, setShowFetchData] = useState(false);
  return (
    <>
      {showFetchData && <Fetch}
    </>
  );
}

export default App;
