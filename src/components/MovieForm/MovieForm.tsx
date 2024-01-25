import React, {useState} from 'react';
import {Movie, MovieForm} from '../../type';

interface Props {
  onSubmit: (movie: Movie) => void;
}

const MovieForm: React.FC<Props> = ({onSubmit}) => {
  const [movieForm, setMovieForm] = useState<MovieForm>(
    {title: ''}
  );
  const changeMovieForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieForm(prevState => ({...prevState, [e.target.name]: e.target.value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...movieForm
    });

  };

  return (
    <form onSubmit={onFormSubmit} className="row justify-content-center">
      <div className="col-4">
        <input type="text" className="form-control" id="inputSearch" name="title" value={movieForm.title}
               onChange={changeMovieForm} required/>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">Add</button>
      </div>
    </form>
  );
};

export default MovieForm;