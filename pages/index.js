import Jokes from "../components/Jokes";

function Home() {
  const jokeyJokes = [
    {title: "Jokey Joke 1"},
    {title: "Jokey Joke 2"},
    {title: "Jokey Joke 3"},
    {title: "Jokey Joke 4"},
  ]
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1></h1>
      {jokeyJokes.map((joker) => <Jokes title={joker.title} key={joker.title}/>)}
    </div>
  );
}

export default Home;
