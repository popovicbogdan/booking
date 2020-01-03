import styled from "styled-components";

export const Search = styled.div`
  width: 280px;
  border: 1px solid black;
  margin: 20px 0 0 0;
  background: orange;
  border-radius: 25px;
  text-align: center;
  @media (max-width: 1200px) {
    float: left;
    margin-left: 20px;
  }
`;

export const Header = styled.h5`
  margin: 20px auto 10px auto;
`;
export const Destination = styled.div`
  margin: 0 22px 0 8px;

  padding-top: 5px;
`;
export const DestinationInput = styled.input`

  border: 2px solid white !important;
  border-radius: 10px !important;
  padding-left: 10px !important;

  }
`;
export const Label = styled.label`
  float: left;
  color: black ;
  font-size: 0.8em;
  margin-bottom: 4px;
  margin-left: 3px;
  
  }
`;
export const DatePicker = styled.div`
  margin: 0 22px 0 8px;
`;
export const DateInput = styled.input`
  border: 2px solid white !important;
  border-radius: 10px !important;
  padding-left: 10px !important;
  > input-field {
    margin-bottom: 0;
  }
`;
export const Guests = styled.div`
  margin: 0 8px 8px 8px;

  input {
    border: 2px solid white;
    border-radius: 10px;
    padding-left: 10px;
  }
  select {
    border: 2px solid white;
    border-radius: 10px;
    background: transparent;
    width: 100%;
  }
`;
export const ChildrenAndRooms = styled.div`
  margin: 3px 8px 0 8px;
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  select {
    width: 120px;
    border: 2px solid white;
    border-radius: 10px;
    background: transparent;
  }
`;
export const Button = styled.button.attrs({ type: "submit", className: "btn" })`
  width: 100px;
  height: 50px;
  background: #2196f3;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  :hover {
    background: #003580;
  }
`;
