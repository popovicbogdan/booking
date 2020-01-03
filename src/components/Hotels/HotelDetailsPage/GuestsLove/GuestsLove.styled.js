import styled from "styled-components";

export const GuestsLoveCont = styled.div.attrs({ className: "col s5" })`
margin-top: 10px;
width: 300px;
  border: 2px solid #cce1ff;
  border-radius: 10px;
  background: #e9f0fa;
  h5 {
    margin-left 10px;
    text-align: center;
}
`;
export const Item = styled.div.attrs({ className: "row valign-wrapper" })`
  padding: 0 10px 0 10px;

  i {
  }
  span {
    margin-left: 5px;
    font-size: 0.9rem;
  }
`;

export const BreakfastInfo = styled.div`
  padding: 0 10px 0 20px !important;
  b {
    font-size: 0.9rem;
    color: #707070;
  }
  p {
    font-size: 0.9rem;
    margin-top: 5px;
  }
`;
export const Button = styled.button.attrs({
  className: "btn"
})`
  display: flex;
  self-align: center;
  margin: 10px auto 10px auto;
  background: #2196f3;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 40px;
  :hover {
    background: #003580;
  }
`;
