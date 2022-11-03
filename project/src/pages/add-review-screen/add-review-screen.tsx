import {Navigate, useParams} from 'react-router-dom';
import { Films } from '../../types/film';
import AddReview from '../../components/add-review/add-review';

type AddReviewScreenProps = {
  films: Films;
}

function AddReviewScreen({films}: AddReviewScreenProps): JSX.Element {
  const params = useParams();
  const Film = films.find((film) => {
    if(film.id === Number(params.id)) {
      return true;
    }
    return false;
  });
  console.log(Film)
  if(!Film) {
    return (
      <Navigate to='/'/>
    );
  }
  return (
    <AddReview film={Film}/>

  );
}

export default AddReviewScreen;
