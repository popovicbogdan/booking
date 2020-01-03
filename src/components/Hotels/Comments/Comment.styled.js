import styled from "styled-components";

export const CommentCont = styled.div.attrs({ className: "container" })`
  width: 300px;

  float: right;
  border-bottom: 1px solid gray;
`;
export const Author = styled.span`
  font-size: 1.1rem;
  color: #2196f3;
  font-weight: bold;
  padding-right: 10px;
`;
export const Country = styled.span`
  font-size: 1rem;
`;
export const CommentText = styled.p``;
