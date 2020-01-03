import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormCont = styled.div.attrs({ className: "container" })`
  margin: 25px auto 0 auto;
  justify-content: center;
  text-align: center;
  width: 500px;
  border: 1px solid gray;
  border-radius: 25px
  padding: 25px;
  background: #e8e8e8
  > p {
      text-align: start;
  }
    

`;
export const InputField = styled.div.attrs({
  className: "input-field"
})``;

export const Label = styled.label`
  color: gray;
`;

export const Inp = styled.input`
  :focus {
    border-bottom: 1px solid #003580;
  }
`;

export const Button = styled.button.attrs({
  className: "btn"
})`
  height: 50px;
  background: #2196f3;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 10px;

  :hover {
    background: #003580;
  }
`;
export const LinkComp = styled(Link)`
  :hover {
    text-decoration: underline;
  }
`;
