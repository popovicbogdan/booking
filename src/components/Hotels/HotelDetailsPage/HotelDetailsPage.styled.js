import styled from "styled-components";

export const HotelDetailsCont = styled.div.attrs({ className: "container" })`
  margin-top: 15px;
  padding: 25px;
  min-width: 950px;
  img {
    width: 100%;
    border-radius: 15px;
  }
`;

export const DescriptionContainer = styled.div.attrs({ className: "col s7" });
export const Description = styled.div`
  margin-right: 20px;
`;

export const MostPopularFacilitiesCont = styled.div.attrs({
  className: "container"
})`
  margin: 25px 5px 0 5px;
  width: 90%;

  i {
    position: relative;
    top: 7px;
    margin-right: 5px;
  }
  span {
    margin: 0 10px;
  }
`;
export const MostPopularTitle = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;
