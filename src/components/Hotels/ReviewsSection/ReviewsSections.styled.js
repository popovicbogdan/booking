import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReviewsCont = styled.div.attrs({ className: "col s4" })`
  && {
    padding: 25px 40px 25px 25px;
  }
`;

export const ReviewScore = styled.div.attrs({ className: "right" })`
  display: grid;
  grid-auto-flow: column;
`;
export const Badge = styled.span.attrs({
  className: "badge indigo darken-4 right"
})`
&& {
  font-size: 1.2em;
  width: 35px;
  height: 27px;
  padding-top: 2px
  text-align:center
  border-radius: 10px;
  border-bottom-left-radius: 0;
  color: white;
  margin-left: 10;
  cursor: pointer;
}
`;
export const P = styled.p`
  && {
    margin: 0 auto;
    width: 100%;
    text-align: end;
  }
`;
export const HighestReview = styled(Link).attrs({ className: "right" })`
  font-size: 0.9rem;
  font-weight: bold;
  color: #07c;
  margin-bottom: 5px;
  &:hover {
    color: orange;
  }
`;
