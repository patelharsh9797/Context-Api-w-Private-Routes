import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import UserContext from "../context/UserContext";

export const useMovie = () => {
  return useContext(MovieContext);
};

export const useAuth = () => {
  return useContext(UserContext);
};
