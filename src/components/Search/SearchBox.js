import React, { useState, useEffect } from "react";
// import M from "materialize-css";
import {
  Search,
  Header,
  Destination,
  DestinationInput,
  Label,
  Guests,
  ChildrenAndRooms,
  Button
} from "./SearchBox.styled";
import CheckInDatePicker from "./CheckInDatePicker";
import CheckOutDatePicker from "./CheckOutDatePicker";
import { setOptions } from "../../common/functions/functions";

const SearchBox = () => {
  //get the search options stored in localstorage or set options to default
  const cachedData = JSON.parse(localStorage.getItem("searchOptions"));
  // console.log(cachedData);

  const [destOrPropertyName, setDestOrProperyName] = useState(
    cachedData ? cachedData.destOrPropertyName : "Zlatibor"
  );
  const [CheckInDate, setCheckInDate] = useState(
    cachedData ? cachedData.CheckInDate : ""
  );
  const [CheckOutDate, setCheckOutDate] = useState(
    cachedData ? cachedData.CheckOutDate : ""
  );
  const [numbOfAdults, setNumbOfAdults] = useState(
    cachedData ? cachedData.numbOfAdults : 1
  );
  const [numbOfChildren, setNumbOfChildren] = useState(
    cachedData ? cachedData.numbOfChildren : 0
  );
  const [numbOfRooms, setNumbOfRooms] = useState(
    cachedData ? cachedData.numbOfRooms : 1
  );

  useEffect(() => {
    localStorage.setItem(
      "searchOptions",
      JSON.stringify({
        destOrPropertyName,
        CheckInDate,
        CheckOutDate,
        numbOfAdults,
        numbOfChildren,
        numbOfRooms
      })
    );
  }, [
    destOrPropertyName,
    numbOfAdults,
    numbOfChildren,
    numbOfRooms,
    CheckInDate,
    CheckOutDate
  ]);
  useEffect(() => {
    console.log("NEWCHECKINDATE", CheckInDate);
    console.log("NEWCHECKOUTDATE", CheckOutDate);
  }, [CheckInDate, CheckOutDate]);

  const getCheckOutCallBack = value => {
    setCheckOutDate(value);
  };
  const getCheckInCallBack = value => {
    setCheckInDate(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Search>
      <form
        onSubmit={e => {
          e.persist();
          handleSubmit();
        }}
      >
        <Header>Traži</Header>
        <Destination>
          <Label htmlFor="destination">Ime destinacije/objekta:</Label>
          <DestinationInput
            type="text"
            placeholder={destOrPropertyName}
            id="destination"
            onChange={e => setDestOrProperyName(e.target.value)}
          />
        </Destination>
        <CheckInDatePicker
          CheckInDate={CheckInDate}
          getCheckInCallBack={getCheckInCallBack}
        />
        <CheckOutDatePicker
          CheckOutDate={CheckOutDate}
          getCheckOutCallBack={getCheckOutCallBack}
        />
        <Guests className="input-field">
          <select
            className="browser-default"
            name="adults"
            id="select"
            defaultValue={numbOfAdults}
            onChange={e => setNumbOfAdults(e.target.value)}
          >
            {setOptions("adults")}
          </select>
        </Guests>
        <ChildrenAndRooms>
          <select
            className="browser-default"
            name="children"
            id="children"
            defaultValue={numbOfChildren}
            onChange={e => setNumbOfChildren(e.target.value)}
          >
            <option value="0">Bez dece</option>

            {setOptions("children")}
          </select>
          <select
            className="browser-default"
            name="rooms"
            id="rooms"
            defaultValue={numbOfRooms}
            onChange={e => setNumbOfRooms(e.target.value)}
          >
            {setOptions("rooms")}
          </select>
        </ChildrenAndRooms>
        <Button>Traži</Button>
      </form>
    </Search>
  );
};

export default SearchBox;
