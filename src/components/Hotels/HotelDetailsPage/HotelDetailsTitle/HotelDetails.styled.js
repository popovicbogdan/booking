import styled from "styled-components";

export const HotelDetailsTitle = styled.div`
  width: 100%;
  margin: 10px;
`;
export const Name = styled.span`
  font-size: 1.8em;
  font-weight: bold;
`;
export const Badge = styled.span`
  margin: 8px 5px 0 0;
  font-weight: 500 !important;
  font-size: 1em !important;
`;
export const Address = styled.span`
  margin-left: 15px;
`;
export const LocationLink = styled.a`
  color: #07c;
  cursor: pointer;
  font-weight: bold;
  margin-left 10px;

  :hover {
    color: orange;
    text-decoration: underline;
  }
`;
