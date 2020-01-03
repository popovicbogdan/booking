import styled from "styled-components";

export const FiltersWrapper = styled.div`
  border: 1px solid black;
  border-radius: 25px;

  width: 280px;
  margin: 10px auto 0 0;
  > h5 {
    padding-left: 30px;
  }
  @media (max-width: 1200px) {
    display: inline-flex;
    justify-content: center;
    float: right;
    margin: 20px 0 0 0;
    border: none;
    width: auto;
    height: 447px;
  }
`;
export const FilterCont = styled.div`
  padding: 15px 30px 0;
  margin: 20px 0;
  border-top: 1px solid black;

  label {
    margin-top: 10px;
    font-size: 1.1rem;
  }
  @media (max-width: 1200px) {
    padding: 15px 20px 0 20px;
    margin: 0 5px;
    border: 1px solid black;
    border-radius: 25px;
  }
`;
