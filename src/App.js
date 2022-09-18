import './App.css';
import React, { useState, useEffect } from 'react';
import Demo from './components/Demo';
import Joke from './components/Joke';

function App() {
  // const [width, setWidth] = useState(window.innerWidth);
  // const [name, setName] = useState('');
  // useEffect(() => {
  //   console.log('fire every time the component renders');
  // });

  // useEffect(() => {
  //   console.log('only fire when the component first mounted');
  // }, []);

  // useEffect(() => {
  //   console.log('fire when first mounted and every time when width changes');
  // }, [width]);

  // const updateWindowWidth = () => setWidth(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener('resize', updateWindowWidth);
  // }, []);
  return (
    <div className="App">
      {/* <h1> Windows width:{width}</h1>
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Demo /> */}
      <Joke />
    </div>
  );
}

export default App;
