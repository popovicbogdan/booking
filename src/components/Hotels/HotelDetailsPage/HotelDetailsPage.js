import React, { useContext } from "react";
import { HotelContext } from "../../../contexts/HotelContextProvider";
import HotelDetailsTitleComp from "./HotelDetailsTitle/HotelDetailsTitle";
import GuestsLove from "./GuestsLove/GuestsLove";
import {
  HotelDetailsCont,
  Description,
  MostPopularFacilitiesCont,
  MostPopularTitle
} from "./HotelDetailsPage.styled";
import Pictures from "./Pictures/Pictures";

const HotelDetailsPage = props => {
  const { hotels } = useContext(HotelContext);

  // get the hotel you selected
  const hotel = hotels.find(hot => hot.name === props.match.params.hotel_name);
  console.log(props);
  console.log("HOTEL IS ", hotel);

  //converts html code into text
  const htmlDecode = input => {
    var e = document.createElement("textarea");
    e.innerHTML = input;
    return e.value;
  };

  //get name of the icon
  const getIcon = item => {
    switch (item) {
      case "spa i velnes centar":
        return "spa";
      case "besplatan parking":
        return "local_parking";
      case "bazen":
      case "zatvoreni bazen":
        return "pool";
      case "besplatan WiFi":
        return "wifi";
      case "porodicne sobe":
        return "people";
      case "bar":
        return "free_breakfast";
      default:
        return "emoji_emoticons";
    }
  };
  console.log(hotel.img);

  const { type, name, stars, address, distFromCenter, place, mapsLink } = hotel;
  return (
    <HotelDetailsCont>
      <HotelDetailsTitleComp
        info={{
          type,
          name,
          stars,
          address,
          distFromCenter,
          place,
          mapsLink
        }}
      />
      <Pictures images={hotel.img} />

      <div className="row">
        <div className="col s7">
          <Description
            dangerouslySetInnerHTML={{
              __html: htmlDecode(hotel.description)
            }}
          />
          <MostPopularFacilitiesCont>
            <MostPopularTitle>Najpopularniji sadrzaj</MostPopularTitle>
            <p>
              {hotel.mostPopular.map((item, index) => (
                <span key={index}>
                  <i className="material-icons green-text">{getIcon(item)}</i>
                  {item}
                </span>
              ))}
            </p>
          </MostPopularFacilitiesCont>
        </div>

        <GuestsLove hotel={hotel} />
      </div>
    </HotelDetailsCont>
  );
};

export default HotelDetailsPage;
