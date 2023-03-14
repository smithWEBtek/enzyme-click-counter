import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 data-testid="counter">Click Counter</h1>
      <h2 data-testid="count">{count}</h2>
      <button 
        data-testid="btn-increment"
        onClick={() => setCount(count + 1)}>INCREMENT</button>
    </div>
  );
}

export default App;
