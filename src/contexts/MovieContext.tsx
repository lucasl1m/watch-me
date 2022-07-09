/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieContextType {
  movies: MovieProps[];
  setMovies: (genres: MovieProps[]) => void;
}

interface MovieContextProviderProps {
  children: React.ReactNode;
}

const MovieContext = createContext({} as MovieContextType);

export const MovieContextProvider = (props: MovieContextProviderProps) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  return <MovieContext.Provider value={{ movies, setMovies }}>{props.children}</MovieContext.Provider>;
};

export default MovieContext;
