import { useEffect, useState } from "react";
import './App.css';

import hole from './assets/hole.png';
import mole from './assets/mole.png';

function App() {
  const [moles, setMoles] = useState(new Array(9).fill(true));

  useEffect(() => {
    const interval = setInterval(() => {

    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])
  return (
    <div className="grid">
      {moles.map((isMole) => (
        <img src={isMole ? mole : hole} />
      ))}
    </div>
  );
}

export default App;
