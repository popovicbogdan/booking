import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import TooltipComp from "../Tooltip/Tooltip";
import {
  ReviewsCont,
  ReviewScore,
  HighestReview
} from "./ReviewsSections.styled";
import { Button } from "../SingleHotelItem/SingleHotel.styled";
import { Badge, P } from "./ReviewsSections.styled";

const ReviewsSection = ({ totAverage, allAverages, count, name }) => {
  const [highest, setHighest] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const evaluation = rev => {
    if (rev >= 9) {
      return "Izvanredan";
    } else if (7 < rev && rev < 8) {
      return "Vrlo dobar";
    } else if (8 < rev && rev < 9) {
      return "Sjajan";
    } else {
      return "Dobar";
    }
  };

  //gets the highest rated of review list
  const getHighestRev = useCallback(() => {
    var x = Object.keys(allAverages).reduce((a, b) =>
      allAverages[a] > allAverages[b] ? a : b
    );
    return x;
  }, [allAverages]);

  useEffect(() => {
    setHighest(getHighestRev(allAverages));
  }, [getHighestRev, allAverages]);

  //rounds the grade to 1 decimal
  const roundNum = numb => {
    return Math.round(numb * 10) / 10;
  };

  return (
    <ReviewsCont>
      <ReviewScore>
        <span
          className="right"
          style={{
            fontWeight: "big",
            fontSize: "1.2em",
            color: "#1a237e",
            marginLeft: "20px"
          }}
        >
          <nobr>{evaluation(totAverage)}</nobr>
        </span>

        <Badge
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {Math.round(totAverage * 10) / 10}
        </Badge>
        <TooltipComp allAverages={allAverages} DisplayClass={showTooltip} />
      </ReviewScore>
      <P className="right">{count} recenzija</P>
      <br />
      <HighestReview to={`/${name}`}>
        {highest} {roundNum(allAverages[highest])}
      </HighestReview>
      <br />
      <Link className="right" to={`/${name}`}>
        <Button>
          <nobr>Prikazi Cene</nobr>
        </Button>
      </Link>
    </ReviewsCont>
  );
};

export default ReviewsSection;
