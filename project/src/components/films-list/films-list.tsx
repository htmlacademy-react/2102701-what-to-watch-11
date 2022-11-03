import {Films} from '../../types/film';
import OneFilmComponent from '../one-film-component/one-film-component';

type FilmListComponentProps = {
  films: Films;
}

function FilmListComponent({films}: FilmListComponentProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <OneFilmComponent key={film.id} film={film}/>
      ))}
    </div>
  );
}

export default FilmListComponent;
