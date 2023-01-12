import React from "react";
import { useAuth, useMovie } from "../utils/useAllContext";
import { Link } from "react-router-dom";
const Movies = () => {
  const { user, logOut } = useAuth();
  const [movies, setMovies] = useMovie();

  const handleLogout = () => {
    logOut();
  };

  return (
    <div>
      <Link to="/add" className="btn">
        Add
      </Link>
      {user && (
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      )}

      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.name}</h1>
          <h3>{movie.price}$</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Movies;
