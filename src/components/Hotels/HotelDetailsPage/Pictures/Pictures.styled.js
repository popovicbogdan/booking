import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const ImageCont = styled.div.attrs({ className: "col valign-wrapper" })`
  position: relative;
  z-index: 1;
`;

export const IconLeft = styled.i`
  font-size: 10rem;
  position: absolute;
  z-index: 4;
  left: 0
  cursor: pointer;
  color: white;
  
`;
export const IconRight = styled.i`
  font-size: 10rem;
  position: absolute;
  right: 0;
  z-index: 4;
  cursor: pointer;
  color: white;
`;

export const ImagesIcons = styled.div.attrs("className: container")`
  display: flex;
  flex-wrap: wrap;
`;
export const SingleImageIcon = styled.img`
  max-width: 70px;
  height: 70px;
  border: ${({ isSelected }) => {
    console.log(isSelected);

    return isSelected ? "2px solid #003580" : "2px solid gray";
  }}
  margin: 5px 2.5px;
  cursor: pointer;
  :hover {
    border: 2px solid teal;
  }

`;
