import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MovieContext from "../context/MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [movieName, setMovieName] = useState("");
  const [moviePrice, setMoviePric] = useState("");
  const [movieID, setMovieID] = useState("");
  const navigate = useNavigate();

  const updateName = (e) => {
    setMovieName(e.target.value);
  };
  const updatePrice = (e) => {
    setMoviePric(e.target.value);
  };
  const updateID = (e) => {
    setMovieID(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prev) => [
      { name: movieName, price: moviePrice, id: movieID },
      ...prev,
    ]);
    console.log("Submitted");
    navigate("/movies");
  };

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        placeholder="Name"
        name="movieName"
        value={movieName}
        onChange={updateName}
      />
      <input
        type="text"
        placeholder="Price"
        name="moviePrice"
        value={moviePrice}
        onChange={updatePrice}
      />

      <input
        type="text"
        placeholder="ID"
        name="movieID"
        value={movieID}
        onChange={updateID}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovie;
