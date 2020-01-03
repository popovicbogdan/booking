import React from "react";
import {
  TooltipList,
  Grade,
  ProgBar,
  ContentName,
  ListItem
} from "./Tooltip.styled";

const TooltipComp = ({ allAverages, DisplayClass }) => {
  //create a progress bars for each content and store in array
  const getToolTips = () => {
    var tooltips = [];
    for (let x in allAverages) {
      let grade = allAverages[x];
      tooltips.push(
        <ListItem key={x}>
          <ContentName>{x}</ContentName>
          <ProgBar className="progress">
            <div
              className="determinate"
              id="bar"
              style={{ width: `${grade.toFixed(1) * 10}%` }}
            />
          </ProgBar>
          <Grade>{grade.toFixed(1)}</Grade>
        </ListItem>
      );
    }
    return tooltips;
  };

  return (
    <TooltipList className={DisplayClass ? "" : "hide"}>
      {getToolTips()}
    </TooltipList>
  );
};

export default TooltipComp;
