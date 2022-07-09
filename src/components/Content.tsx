import { useContext, useEffect } from 'react';

import GenresContext, { GenreResponseProps } from '../contexts/GenresContext';
import MovieContext, { MovieProps } from '../contexts/MovieContext';
import { api } from '../services/api';
import { MovieCard } from './common/movie-card/MovieCard';

import '../styles/content.scss';

export const Content = () => {
  const { movies, setMovies } = useContext(MovieContext);
  const { selectedGenreId, selectedGenre, setSelectedGenre } = useContext(GenresContext);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then((response) => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId, setMovies, setSelectedGenre]);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
