// import { useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,
  //useLocation,
} from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

// TODO Components
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movies";

// TODO Styles
import "./App.css";

function App() {
  // let location = useLocation();
  // useEffect(() => {
  //   console.log(location.state);
  // }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/remove" element={<Outlet />} />
        </Route>
      </Routes>
    </>
  );
}
{
  /* <div id={movie.id}>
  <h1>movie.name</h1>
  <h2>movie.price</h2>
</div>; */
}
export default App;
