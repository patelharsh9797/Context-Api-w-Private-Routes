import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieContextProvider } from "./context/MovieContext";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <MovieContextProvider>
          <App />
        </MovieContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);
