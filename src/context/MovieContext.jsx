import { createContext, useState } from "react";

const MovieContext = createContext();
MovieContext.displayName = "Movies";

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    { name: "Movie 1", price: "70", id: 123 },
    { name: "Movie 2", price: "50", id: 321 },
    { name: "Movie 3", price: "10", id: 21 },
  ]);

  let valueOBJ = [movies, setMovies];

  return (
    <MovieContext.Provider value={valueOBJ}>
      {children}
      {/* {props.children} */}
    </MovieContext.Provider>
  );
};

export default MovieContext;
