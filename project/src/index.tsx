import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Date: 2014,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title = {Setting.Title}
      genre = {Setting.Genre}
      date = {Setting.Date}
    />
  </React.StrictMode>,
);
