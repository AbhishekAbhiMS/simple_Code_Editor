import React from 'react';
import CodeEditor from './CodeEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:'center'}}>Simple Code Editor</h1>
        <CodeEditor />
      </header>
    </div>
  );
}

export default App;
