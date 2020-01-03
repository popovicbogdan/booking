import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { HotelContext } from "../../../contexts/HotelContextProvider";
import { FavoritesCont } from "./Favorites.styled";
import SingleHotelItem from "../SingleHotelItem/SingleHotelItem";

const Favorites = () => {
  const favorites = useSelector(state => state.auth.favs.favs);

  const { hotels } = useContext(HotelContext);

  //get only the hotels that are favorited
  const favHotels = hotels.filter(
    hotel => favorites.includes(hotel.id) && hotel
  );
  console.log("FAV HOTELS===> ", favHotels);

  return (
    <FavoritesCont>
      {favHotels.map(hotel => (
        <SingleHotelItem key={hotel.id} hotel={hotel} />
      ))}
    </FavoritesCont>
  );
};

export default Favorites;
