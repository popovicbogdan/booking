import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav.attrs({ className: "nav-wrapper" })`
  && {
    width: 100%;
    min-width: 1200px;
    max-width: none;
    background-color: #003580;
    > div {
      width: 90%;

      > ul {
        display: inline-flex;
        position: relative;
        float: right;
      }
    }
    @media (max-width: 730px) {
      div {
        ul {
          position: absolute;
          float: left;
          left: 40%;
        }
      }
    }
    @media (min-width: 731px) and (max-width: 1200px) {
      div {
        ul {
          position: sticky;
          right: 15px;
        }
      }
    }
  }
`;

export const BrandLogoLink = styled(Link).attrs({ className: "brand-logo" })`
  && {
    position: absolute;
    left: 10%;
    > span {
      font-weight: bold;
    }

    @media (max-width: 992px) {
      left: 20%;
    }
  }
`;
export const NavbarLink = styled(Link).attrs({ className: "btn white" })`
  color: black;
  font-weight: bold;
  white-space: nowrap
  &:hover {
    color: #07c;
  }
`;
