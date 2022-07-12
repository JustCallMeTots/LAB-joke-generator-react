import { useState } from "react";
import getJoke from "../api/jokeData";
import axios from 'axios';

// const examplePromise = () => {
//   axios.get('http://localhost:3001/example')
//     .then((data) => {
//       console.warn(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

function Jokes({ title }) {
  const [value, setValue] = useState('');

  const handleClick = () => {
    setValue((prevState) => getJoke(prevState))
  }
  return (
    <>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Wanna hear a joke?</button>
      {/* { value === '' ? <button type="button" onClick={}></button> } */}
    </>
  );
}

export default Jokes;