import React, { useEffect } from "react";
import HotelContextProvider from "./contexts/HotelContextProvider";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "./components/Auth/RegisterPage";
import LoginPage from "./components/Auth/Login/LoginPage";
import { loadUser } from "./store/actions/auth";
import { useDispatch } from "react-redux";
import HotelDetailsPage from "./components/Hotels/HotelDetailsPage/HotelDetailsPage";
import Favorites from "./components/Hotels/Favorites/Favorites";
import FiltersContextProvider from "./contexts/FiltersContextProvider";

function App() {
  const dispatch = useDispatch();

  //load user on every page reload
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <HotelContextProvider>
        <FiltersContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/:hotel_name" component={HotelDetailsPage} />
          </Switch>
        </FiltersContextProvider>
      </HotelContextProvider>
    </div>
  );
}

export default App;
