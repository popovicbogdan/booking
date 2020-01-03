import React from "react";
// import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";
import {
  HotelName,
  Badge,
  Dot,
  LocationCont,
  DistanceFromCentre
} from "./Title.styled";

const Title = ({ info }) => {
  // open a new window with hotel details
  const handleOpenWindow = () => {
    let newWindowLink = `http://localhost:3000/${info.name}`;
    const win = window.open(
      newWindowLink,
      `${info.name}`,
      "height=700,width=950"
    );
    win.focus();
  };

  return (
    <>
      <div className="Info title">
        <nobr>
          <Badge
            className="badge green new left"
            data-badge-caption={info.type}
          />
          <HotelName>
            <b onClick={handleOpenWindow}>{info.name}</b>
            <Stars stars={info.stars} />
          </HotelName>
        </nobr>
      </div>
      <LocationCont>
        <a href={info.mapsLink} target="_blank" rel="noopener noreferrer">
          {info.place} <Dot /> Prikaži na mapi
        </a>
        <DistanceFromCentre>
          {info.distFromCenter} m od centra
        </DistanceFromCentre>
      </LocationCont>
    </>
  );
};

export default Title;
