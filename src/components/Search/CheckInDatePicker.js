import React, { useEffect, useState } from "react";
import Materialize from "materialize-css";
import { DatePicker, Label, DateInput } from "./SearchBox.styled";
import moment from "moment";

const CheckInDatePicker = ({ CheckInDate, getCheckInCallBack }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    var elems = document.querySelectorAll("#checkIn");
    Materialize.Datepicker.init(elems, {
      defaultDate: new Date(),
      format: "ddd d mmm yyyy",
      container: "body",
      onSelect: function(date) {
        setDate(date);

        console.log(date);
      }
    });
  }, []);
  useEffect(() => {
    getCheckInCallBack(date);
  }, [date, getCheckInCallBack]);
  return (
    <DatePicker>
      <Label htmlFor="checkIn">Datum prijavljivanja</Label>
      <DateInput
        placeholder="Datum Prijavljivanja"
        id="checkIn"
        type="text"
        className="datepicker"
        defaultValue={moment(CheckInDate ? CheckInDate : date).format(
          "ddd D MMM YYYY"
        )}
      />
    </DatePicker>
  );
};

export default CheckInDatePicker;
