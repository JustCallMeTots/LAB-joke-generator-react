import { useState } from 'react';
import PropTypes from 'prop-types';
import getJoke from '../api/jokeData';
// import axios from 'axios';

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
    const [funnyHaha, setfunnyHaha] = useState({});
    const [btnShit, setBtnShit] = useState('Wanna Hear a Joke???')

  const handleClick = () => {
   if (btnShit === 'Wanna Hear a Joke???' || btnShit === 'You Want to Hear Another One, Right?') {
    getJoke().then(setfunnyHaha).then(() => {
      setBtnShit('Punchline');
    });
   } else if (btnShit === 'Punchline') {
      setBtnShit('You Want to Hear Another One, Right?');
   }
  };

  return (
    <>
      <h1>{ title }</h1>
      <h2>{ btnShit === 'Wanna Hear a Joke???' ? '' : funnyHaha.setup}</h2>
      <h3>{btnShit === 'You Want to Hear Another One, Right?' ? funnyHaha.delivery : ''}</h3>
      <button type="button" onClick={handleClick}>{btnShit}</button>
    </>
  );
}

export default Jokes;

Jokes.propTypes = {
  title: PropTypes.string.isRequired,
};
