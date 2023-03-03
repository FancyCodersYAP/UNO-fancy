import { useEffect } from 'react';
import { GamePage } from './pages/gamePage/gamePage';

import './App.css';

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchServerData();
  }, []);

  return <GamePage />;
}

export default App;
