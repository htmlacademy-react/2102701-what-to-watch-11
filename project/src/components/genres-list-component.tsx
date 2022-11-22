import {Link} from 'react-router-dom';
import {GenresList} from '../../src/const'
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/index';
import {switchToAllGenres, switchToComedies, switchToCrime, switchToDocumentary, switchToDramas, switchToHorror, switchToKidsAndFamily, switchToRomance, switchToSciFi, switchToThrillers} from '../store/actions'

type GenresListComponentProps = {
  genresList: typeof GenresList
}

function GenresListComponent({genresList}: GenresListComponentProps): JSX.Element {
  const stateGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  return (
    <>
    <span>{}</span>
      <ul className="catalog__genres-list">
        <li className={'catalog__genres-item ' + (stateGenre === 'All Genres' ? 'catalog__genres-item--active' : '')}>
          <Link to='#' onClick = {() => dispatch(switchToAllGenres())}  className="catalog__genres-link">{genresList.AllGenres}</Link>
        </li>
        <li className={'catalog__genres-item ' + (stateGenre === 'Comedies' ? 'catalog__genres-item--active' : '')}>
          <Link to='#' onClick={() => dispatch(switchToComedies())} className="catalog__genres-link">{genresList.Comedy}</Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='#' onClick={() => dispatch(switchToCrime())} className="catalog__genres-link">{genresList.Crime}</Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='#' onClick={() => dispatch(switchToDocumentary())} className="catalog__genres-link">{genresList.Documentary}</Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='#' onClick={() => dispatch(switchToDramas())} className="catalog__genres-link">{genresList.Drama}</Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='#' onClick={() => dispatch(switchToHorror())} className="catalog__genres-link">{genresList.Horror}</Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='#' onClick={() => dispatch(switchToKidsAndFamily())} className="catalog__genres-link">{genresList.KidsAndFamily}</Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='#' onClick={() => dispatch(switchToRomance())} className="catalog__genres-link">{genresList.Romance}</Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='#' onClick={() => dispatch(switchToSciFi())} className="catalog__genres-link">{genresList.SciFi}</Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='#' onClick={() => dispatch(switchToThrillers())} className="catalog__genres-link">{genresList.Thriller}</Link>
        </li>
      </ul>
    </>
  )
}

export default GenresListComponent;
