import React from 'react';
import Forms from './Forms.js';
import './App.css';

const Movies = [
  {
    name: 'King kong',
    available: 3
  },
  {
    name: 'Anaconda',
    available: 2
  },
  {
    name: 'Toy Story',
    available: 9
  },
  {
    name: 'Shrek',
    available: 6
  }
]

function App() {
  return (
    <div>
      <h1>
        Movie list
      </h1>
      {Movies.map((movie) => (
        <Forms movie={movie} />
      ))}
    </div>
  );
}

export default App;
