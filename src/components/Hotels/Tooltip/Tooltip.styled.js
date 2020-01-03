import styled from "styled-components";

export const TooltipList = styled.ul`
  position: absolute;
  display: list-item;
  border: 1px solid gray;
  border-radius: 25px;
  background: #575757;
  opacity: 80%;
  padding: 5px 0 10px 0;
  overflow: visible;
  z-index: 3;
  width: 180px;
  top: 38px;
  right: -39px;
`;

export const ListItem = styled.li`
  height: 30px;
`;

export const ContentName = styled.span`
  font-size: 0.9rem;
  margin-left: 10px;
  color: white;
`;

export const ProgBar = styled.span`
  display: inline-flex;
  margin: 0 5px 3px 10px;
  width: 80%;
  position: relative;
  bottom: 10px;
`;

export const Grade = styled.span`
  diplay: inline-flex;
  font-size: 0.8rem;
  font-weight: bold;
  position: relative;
  bottom: 10px;
  color: white;
`;
