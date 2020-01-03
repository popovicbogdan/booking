import React from "react";
import { Stars } from "./Stars.styled";

const StarsComp = ({ stars }) => {
  const makeStars = () => {
    var st = [];
    for (let x = 0; x < stars; x++) {
      st.push(
        <i key={x} className="material-icons tiny">
          star
        </i>
      );
    }
    return st;
  };
  return <Stars>{makeStars()}</Stars>;
};

export default StarsComp;
