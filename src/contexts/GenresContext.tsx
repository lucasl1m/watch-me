/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenresContextType {
  genres: GenreResponseProps[];
  setGenres: (genres: GenreResponseProps[]) => void;
  selectedGenre: GenreResponseProps;
  setSelectedGenre: (genre: GenreResponseProps) => void;
  selectedGenreId: number;
  setSelectedGenreId: (selectedGenreId: number) => void;
}

interface GenresContextProviderProps {
  children: React.ReactNode;
}

const GenresContext = createContext({} as GenresContextType);

export const GenresContextProvider = (props: GenresContextProviderProps) => {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <GenresContext.Provider
      value={{
        genres,
        setGenres,
        selectedGenre,
        setSelectedGenre,
        selectedGenreId,
        setSelectedGenreId,
      }}
    >
      {props.children}
    </GenresContext.Provider>
  );
};

export default GenresContext;
