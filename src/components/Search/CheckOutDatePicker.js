import React, { useEffect, useState } from "react";
import Materialize from "materialize-css";
import { DatePicker, Label, DateInput } from "./SearchBox.styled";
import moment from "moment";

const CheckOutDatePicker = ({ CheckOutDate, getCheckOutCallBack }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    var elems = document.querySelectorAll("#datepicker");
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
    getCheckOutCallBack(date);
  }, [date, getCheckOutCallBack]);
  return (
    <DatePicker>
      <Label htmlFor="datepicker">Datum odjavljivanja</Label>
      <DateInput
        placeholder="Datum odjavljivanja"
        id="datepicker"
        type="text"
        className="datepicker"
        defaultValue={moment(CheckOutDate ? CheckOutDate : date).format(
          "ddd D MMM YYYY"
        )}
      />
    </DatePicker>
  );
};

export default CheckOutDatePicker;
