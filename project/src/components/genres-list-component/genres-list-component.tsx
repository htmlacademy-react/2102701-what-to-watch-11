import {Link} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {switchToAllGenres, switchToGenre} from '../../store/actions';

type GenresListComponentProps = {
  genres: string[];
}

function GenresListComponent({genres}: GenresListComponentProps): JSX.Element {
  const stateGenre = useAppSelector((state) => state.DATA.genre);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      <li key={'All Genres'} className={`catalog__genres-item ${ stateGenre === 'All Genres' ? 'catalog__genres-item--active' : ''}`}>
        <Link to='#' onClick = {() => dispatch(switchToAllGenres())} className="catalog__genres-link">All Genres</Link>
      </li>
      {genres.map((genre) =>
        (
          <li key={genre} className={`catalog__genres-item ${ stateGenre === genre ? 'catalog__genres-item--active' : ''}`}>
            <Link to='#' onClick = {() => dispatch(switchToGenre(genre))} className="catalog__genres-link">{genre}</Link>
          </li>
        )
      )}
    </ul>
  );
}

export default GenresListComponent;
