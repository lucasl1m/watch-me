// eslint-disable-next-line import/no-unresolved
import { render } from 'react-dom';

import { App } from './App';
import { GenresContextProvider } from './contexts/GenresContext';
import { MovieContextProvider } from './contexts/MovieContext';

render(
  <GenresContextProvider>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </GenresContextProvider>,
  document.getElementById('root'),
);
