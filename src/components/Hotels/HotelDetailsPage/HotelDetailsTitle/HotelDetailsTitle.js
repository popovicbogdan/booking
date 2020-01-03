import React from "react";
import {
  HotelDetailsTitle,
  Name,
  Badge,
  Address,
  LocationLink
} from "./HotelDetails.styled";
import Stars from "../../Stars/Stars";

const HotelDetailsTitleComp = ({ info }) => {
  return (
    <HotelDetailsTitle>
      <Badge className="badge grey new left" data-badge-caption={info.type} />
      <Name>{info.name}</Name>
      <Stars stars={info.stars} />
      <br />
      <Address>{info.address}</Address>
      <LocationLink
        href={info.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Odlična lokacija - prikaži na mapi
      </LocationLink>
    </HotelDetailsTitle>
  );
};

export default HotelDetailsTitleComp;
