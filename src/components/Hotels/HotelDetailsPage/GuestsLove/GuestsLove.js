import React from "react";
import {
  GuestsLoveCont,
  Item,
  BreakfastInfo,
  Button
} from "./GuestsLove.styled";

const GuestsLove = ({ hotel }) => {
  return (
    <GuestsLoveCont>
      <h5>Gostima Se Sviđa...</h5>
      <Item>
        <i className="material-icons col s1">favorite</i>
        <span className="col s11 ">{hotel.guestsLove.location}</span>
      </Item>
      <Item>
        <i className="material-icons col s1">hotel</i>
        <span className="col s11 ">{hotel.guestsLove.comfort}</span>
      </Item>
      <BreakfastInfo>
        <b>Informacije o dorucku</b>
        <p>{hotel.breakfastInfo}</p>
      </BreakfastInfo>
      <Item>
        <i className="material-icons col s1">wifi</i>
        <span className="col s11">{hotel.twoFavs.wifi}</span>
      </Item>
      <Item>
        <i className="material-icons col s1">local_parking</i>
        <span className="col s11">{hotel.twoFavs.parking}</span>
      </Item>
      <Button>Rezervisi</Button>
    </GuestsLoveCont>
  );
};

export default GuestsLove;
