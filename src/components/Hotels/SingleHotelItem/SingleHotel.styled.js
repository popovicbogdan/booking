import styled from "styled-components";

export const Card = styled.div.attrs({
  className: "card horizontal hoverable "
})`
  min-width: 880px;
  &:hover {
    background: rgb(241, 241, 241);
  }
`;
export const CardImage = styled.div.attrs({ className: "card-image" })`
  margin: 10px;
  height: 260px;
  width: 35%;
  max-width: 346px;
`;
export const CommentSection = styled.div.attrs({ className: "card-action" })`
  && {
    display: grid;
    grid-auto-flow: column;
    padding-bottom: 5px;
  }
`;
export const FavIcon = styled.i`
  filter: drop-shadow(0 2px 1.5px rgb(0, 0, 0));
  cursor: pointer;
  color: white;
  position: absolute;
  left: 80%;
  top: 25px;
  z-index: 2;
`;
export const Button = styled.button.attrs({
  className: "btn"
})`
  background: #2196f3;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 40px;
  :hover {
    background: #003580;
  }
`;
export const Description = styled.p`
  font-size: 0.9rem;
  padding: 10px 0 0 0;
`;
export const Image = styled.img`
  height: 260px;
`;
