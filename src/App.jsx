import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';

export function App() {
  const [apod, setApod] = useState({});

  const getApod = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=eygJAheREWZv5vgvemaaX6pXe2locblGKX77lK1g'
      )
      .then((res) => setApod(res.data));
  };

  getApod();

  return (
    <>
      <h1>{apod.title}</h1>
      <h3>{apod.date}</h3>
      <img src={apod.hdurl}></img>
      <p>{apod.explanation}</p>
    </>
  );
}
