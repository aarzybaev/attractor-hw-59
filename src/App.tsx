import {useState} from 'react';
import {Movie} from './type';
import Appbar from './components/Appbar/Appbar';
import MovieForm from './components/MovieForm/MovieForm';
import MovieItem from './components/MovieForm/MovieItem';
import Joke from './components/Joke/Joke';

function App() {
  const [movieItems, setMovieItems] = useState<Movie[]>([]);
  const addMovie = (movie: Movie) => {
    setMovieItems(prevState => [...prevState, movie]);
  };
  const onChangeMovieItem = (item: Movie) => {
    const index = movieItems.findIndex(movie => movie.id === item.id);
    if (index !== -1) {
      const moviesCopy = [...movieItems];
      moviesCopy[index] = item;
      setMovieItems(moviesCopy);
    }
  };

  const removeItemHandler = (id: string) => {
    const index = movieItems.findIndex(movie => movie.id === id);
    if (index !== -1) {
      const moviesCopy = [...movieItems];
      moviesCopy.splice(index, 1);
      setMovieItems(moviesCopy);
    }
  };
  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main className="container-fluid">
        <section>
          <div className="row mt-2">
            <div className="col">
              <h5>Task-1</h5>
              <MovieForm onSubmit={addMovie}/>
              <div className="row justify-content-center">
                <div className="col-5">
                  <h5>To watch list:</h5>
                  {
                    movieItems.map(movie =>
                      <MovieItem
                        key={movie.id}
                        title={movie.title}
                        id={movie.id}
                        onChange={onChangeMovieItem}
                        removeItem={() => removeItemHandler(movie.id)}
                      />
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row mt-5">
            <div className="col">
              <h5>Task-2</h5>
              <div className="row justify-content-center">
                <div className="col-5">
                  <Joke/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
