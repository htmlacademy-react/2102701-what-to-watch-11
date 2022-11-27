import Player from '../../components/player/player';
import {Navigate, useParams} from 'react-router-dom';
import {Films} from '../../types/film';
import { useAppSelector } from '../../hooks';



function PlayerScreen(): JSX.Element {
  const films = useAppSelector((state) => state.filmsList);
  const params = useParams();
  const Film = films.find((film) => {
    if(film.id === Number(params.id)) {
      return true;
    }
    return false;
  });
  if(!Film) {
    return (
      <Navigate to='/'/>
    );
  }

  return (
    <Player film={Film}/>
  );
}

export default PlayerScreen;
