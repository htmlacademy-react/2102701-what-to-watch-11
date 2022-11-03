import Player from '../../components/player/player';
import {Navigate, useParams} from 'react-router-dom';
import {Films} from '../../types/film';

type PlayerScreenProps = {
  films: Films;
}

function PlayerScreen({films}: PlayerScreenProps): JSX.Element {
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
