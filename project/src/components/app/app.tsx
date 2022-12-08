import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRouteComponent from '../private-route-component/private-route-component';
import Error404Screen from '../../pages/error-404-screen/error-404-screen';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {useAppSelector} from '../../hooks';
import { reviews } from '../../mocks/reviews';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus, getAuthCheckedStatus} from '../../store/user-process/selectors';
import {getFilmsDataLoadingStatus} from '../../store/film-data/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  const films = useAppSelector((state) => state.DATA.films);

  if (!isAuthChecked || isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Welcome}
          element={<WelcomeScreen films={films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRouteComponent
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen />
            </PrivateRouteComponent>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmScreen reviews={reviews}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path="*"
          element={<Error404Screen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
