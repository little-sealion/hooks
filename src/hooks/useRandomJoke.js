import { useState, useEffect } from 'react';

export const useRandomJoke = (firstName, lastName) => {
  const [joke, setJoke] = useState('');
  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      );
      const data = await response.json();
      setJoke(data.value.joke);
    };
    fetchJoke();
  }, [firstName, lastName]);

  return joke;
};
