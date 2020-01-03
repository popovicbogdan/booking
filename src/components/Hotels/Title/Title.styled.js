import styled from "styled-components";

export const HotelName = styled.p`
  padding: 0;
  b {
    font-size: 1.3rem;
    cursor: pointer;
    color: #07c;
  }
  b:hover {
    color: orange;
  }
`;
export const Badge = styled.span`
  margin: 3px 5px 0 0 !important;
`;
export const LocationCont = styled.div`
  a {
    text-decoration: underline;
    font-size: 0.9rem;
  }
`;
export const Dot = styled.span`
  width: 3px;
  height: 3px;
  text-align: center;
  display: inline-block;
  border: 2px solid gray;
  border-radius: 50%;
  margin: 3px 3px;
`;
export const DistanceFromCentre = styled.span`
  font-size: 0.8rem;
  margin-left: 5px;
`;
