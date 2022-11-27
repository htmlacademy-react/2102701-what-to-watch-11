import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import { GenresList } from './const';
import ErrorMessage from './components/error-message/error-message';
import {fetchFilmsAction, checkAuthAction} from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
);

