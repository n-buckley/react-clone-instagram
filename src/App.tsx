import React from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './components/Post'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Post/>
        <Post/>
      </header>
    </div>
  );
}

export default App;
