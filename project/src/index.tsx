import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import { GenresList } from './const';

const Settings = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Date: '2014',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        title = {Settings.Title}
        genre = {Settings.Genre}
        date = {Settings.Date}
        films = {films}
        reviews = {reviews}
        genresList= {GenresList}
      />
    </Provider>
  </React.StrictMode>,
);

