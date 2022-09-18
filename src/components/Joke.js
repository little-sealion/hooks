import React, { useState, useRef } from 'react';
import { useRandomJoke } from '../hooks/useRandomJoke';

export default function Joke() {
  const [firstName, setFirstName] = useState('taishi');
  const [lastName, setLastName] = useState('zheng');
  const joke = useRandomJoke(firstName, lastName);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
  return (
    <div style={{ margin: 10 }}>
      {joke}
      <form style={{ margin: 10, padding: 10 }}>
        <input ref={firstNameRef} type="text" placeholder="firstName" />
        <input ref={lastNameRef} type="text" placeholder="lastName" />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}
