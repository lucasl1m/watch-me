import { useContext, useEffect } from 'react';

import GenresContext, { GenreResponseProps } from '../contexts/GenresContext';
import { api } from '../services/api';
import '../styles/sidebar.scss';
import { Button } from './common/button/button';

export const SideBar = () => {
  const { genres, setGenres, selectedGenreId, setSelectedGenreId } = useContext(GenresContext);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data);
    });
  });

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};
