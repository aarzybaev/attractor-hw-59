import React, {useEffect, useState} from 'react';

const Joke: React.FC = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [joke, setJoke] = useState<string[]>([]);

  const getJoke = async () => {
    const fetchData = async () => {

      const response = await fetch(url);

      if (response.ok) {
        const parsed = await response.json();
        setJoke(parsed.value);
      }

    };

    fetchData().catch(e => console.error(e));
  };
  useEffect(() => {
    void getJoke();
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-header">
          Joke
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{joke}</p>
            <footer className="blockquote-footer">Chuck Norris</footer>
          </blockquote>
        </div>
      </div>
      <button className="btn btn-primary mt-2" onClick={getJoke}>New joke</button>
    </>
  );
};

export default Joke;