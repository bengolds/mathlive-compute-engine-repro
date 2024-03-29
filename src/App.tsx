import React from 'react';
import logo from './logo.svg';
import './App.css';

// If you comment out the next line, the error disappears.
import { MathfieldElement } from 'mathlive';
import { ComputeEngine } from '@cortex-js/compute-engine';

const ce = new ComputeEngine();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
