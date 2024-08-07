import { useEffect, useState } from "react";
import './App.css';

import hole from './assets/hole.png';
import mole from './assets/mole.png';

function App() {
  const [score, setScore] = useState(0);
  const [moles, setMoles] = useState(new Array(9).fill(false));

  function whackMole(index: number) {
    if (!moles[index]) return;
    hideMole(index);
    setScore(score + 1);
  }

  function hideMole(index: number) {
    if (!moles[index]) return;
    const newMoles = [...moles];
    newMoles[index] = false;
    setMoles(newMoles);
  }

  function popMole(index: number) {
    const newMoles = [...moles];
    newMoles[index] = true;
    setMoles(newMoles);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      popMole(randomIndex);
      setTimeout(() => {
        hideMole(randomIndex);
      }, 500)
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [moles])

  return (
    <>
    <h1>Score {score}</h1>
    <div className="grid">
      {moles.map((isMole, idx) => (
        <img src={isMole ? mole : hole} 
        onClick={() => {whackMole(idx);
          
        }}
        />
      ))}
    </div>
    </>
  );
}

export default App;
