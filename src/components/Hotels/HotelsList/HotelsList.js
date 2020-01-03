import React, { useContext, useEffect } from "react";
import { HotelContext } from "../../../contexts/HotelContextProvider";
import SingleHotelItem from "../SingleHotelItem/SingleHotelItem";
import { HotelsListCont } from "./HotelsList.styled";
import { FiltersContext } from "../../../contexts/FiltersContextProvider";

const HotelsList = () => {
  const { hotels } = useContext(HotelContext);
  const { toggleShowHotels } = useContext(HotelContext);

  useEffect(() => {
    //set showHotels to false when unmounting component
    return () => toggleShowHotels(false);
  });

  const { filters } = useContext(FiltersContext);
  console.log("FILTERS", filters);

  return (
    <HotelsListCont>
      {hotels.map(hotel => (
        <SingleHotelItem key={hotel.id} hotel={hotel} />
      ))}
    </HotelsListCont>
  );
};
export default HotelsList;
