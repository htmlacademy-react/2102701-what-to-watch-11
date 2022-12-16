import { useState } from 'react';
import { postReviewsAction } from '../../store/api-actions';
import { PostReviewData } from '../../types/post-review-data';
import { useAppDispatch } from '../../hooks';
import {FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {CommentLength} from '../../const';

type AddReviewFormProps = {
  filmId: number;
}


function AddReviewForm({filmId}: AddReviewFormProps): JSX.Element {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    rating: 0,
  });

  const navigate = useNavigate();
  const {rating} = state;

  const onSubmit = (reviewData: PostReviewData) => {
    setIsLoading(true);
    dispatch(postReviewsAction(reviewData))
      .unwrap()
      .then(
        () => {navigate(`/films/${filmId}`);},
        () => {throw new Error('Erorr');}
      )
      .then(() => setIsLoading(false))
      .catch(Error);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(evt.currentTarget.reportValidity() !== true) {
      return;
    }
    if (textAreaRef.current !== null && state.rating > 0) {
      onSubmit({
        comment: textAreaRef.current.value,
        rating: state.rating,
        filmId: filmId,
      });
    }
  };

  return (
    <form action="" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 10 }));}} className="rating__input" id="star-10" checked={rating === 10} type="radio" name="rating" value="10" />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 9}));}} className="rating__input" id="star-9" checked={rating === 9} type="radio" name="rating" value="9" />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 8}));}} className="rating__input" id="star-8" checked={rating === 8} type="radio" name="rating" value="8" />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 7}));}} className="rating__input" id="star-7" checked={rating === 7} type="radio" name="rating" value="7" />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 6}));}} className="rating__input" id="star-6" checked={rating === 6} type="radio" name="rating" value="6" />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 5}));}} className="rating__input" id="star-5" checked={rating === 5} type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 4}));}} className="rating__input" id="star-4" checked={rating === 4} type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 3}));}} className="rating__input" id="star-3" checked={rating === 3} type="radio" name="rating" value="3" />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 2}));}} className="rating__input" id="star-2" checked={rating === 2} type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input disabled={isLoading} onChange={() => {setState((prevState) => ({...prevState, rating: 1}));}} className="rating__input" id="star-1" checked={rating === 1} type="radio" name="rating" value="1" />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea ref={textAreaRef} required disabled={isLoading} minLength={CommentLength.min} maxLength={CommentLength.max} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
