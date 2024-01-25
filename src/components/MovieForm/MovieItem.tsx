import React from 'react';
import {Movie} from '../../type';

interface Props {
  id: string;
  title: string;
  onChange: (item: Movie) => void;
  removeItem: React.MouseEventHandler;
}

const MovieItem: React.FC<Props> = React.memo(
  ({
     id,
     title,
     onChange,
     removeItem
   }) => {
    const changeMovieTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const movie = {
        id,
        title: e.target.value
      };
      onChange(movie);
    };
    return (
      <div className="d-flex gap-2 mb-2">
        <input type="text" className="form-control" name="title" value={title} onChange={changeMovieTitle}/>
        <button className="btn btn-danger" onClick={removeItem}>Del</button>
      </div>
    );
  }
);


export default MovieItem;