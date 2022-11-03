import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRouteComponent from '../private-route-component/private-route-component';
import Error404Screen from '../../pages/error-404-screen/error-404-screen';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import {Films} from '../../types/film';
import {Reviews} from '../../types/review';


type AppScreenProps = {
  title: string;
  genre: string;
  date: string;
  films: Films;
  reviews: Reviews;
}

function App({title, genre, date, films, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Welcome}
          element={<WelcomeScreen title={title} genre={genre} date={date} films={films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen films={films}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRouteComponent
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListScreen films={films}/>
            </PrivateRouteComponent>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmScreen films={films}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen films={films}/>}
        />
        <Route
          path="*"
          element={<Error404Screen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
