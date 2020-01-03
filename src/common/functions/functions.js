import React from "react";
//set the select options
export const setOptions = type => {
  var val;
  var numb = 30;
  var options = [];
  switch (type) {
    case "adults":
      for (let x = 1; x <= numb; x++) {
        switch (x) {
          case 2:
          case 3:
          case 4:
          case 22:
          case 23:
          case 24:
            val = " odrasla";
            break;
          case 1:
          case 21:
            val = " odrasli";
            break;
          default:
            val = " odraslih";
        }
        options.push(
          <option key={x} value={x}>
            {x + val}
          </option>
        );
      }
      break;
    case "children":
      numb = 10;
      for (let x = 1; x <= numb; x++) {
        switch (x) {
          case 1:
            val = " dete";
            break;
          case 2:
          case 3:
          case 4:
            val = " deteta";
            break;
          default:
            val = " dece";
        }
        options.push(
          <option key={x} value={x}>
            {x + val}
          </option>
        );
      }

      break;
    default:
      for (let x = 1; x <= numb; x++) {
        switch (x) {
          case 2:
          case 3:
          case 4:
            val = " jedinice";
            break;
          default:
            val = " jedinica";
        }
        options.push(
          <option key={x} value={x}>
            {x + val}
          </option>
        );
      }
  }
  return options;
};
