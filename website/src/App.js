import React from 'react';
import logo from './aws.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website was created using CDK patterns.
        </p>
        <a
          className="App-link"
          href="https://cdkpatterns.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about CDK patterns
        </a>
      </header>
    </div>
  );
}

export default App;
