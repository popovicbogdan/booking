import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth";
import { HotelContext } from "../../contexts/HotelContextProvider";
import { BrandLogoLink, Nav, NavbarLink } from "./Navbar.styled";

const Navbar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const { toggleShowHotels } = useContext(HotelContext);
  const signedInLinks = (
    <>
      <li>
        <NavbarLink to="/" onClick={() => toggleShowHotels()}>
          Prikaži Hotele
        </NavbarLink>
      </li>
      <li>
        <NavbarLink to="/favorites">Omiljeni</NavbarLink>
      </li>
      <li>
        <NavbarLink to="/" onClick={() => dispatch(logout())}>
          Odjavite se
        </NavbarLink>
      </li>
    </>
  );
  const signedOutLink = (
    <>
      <li>
        <NavbarLink to="/register">Registrujte se</NavbarLink>
      </li>
      <li>
        <NavbarLink to="/login">Ulogujte se</NavbarLink>
      </li>
    </>
  );

  const navLinks = isAuthenticated ? signedInLinks : signedOutLink;

  return (
    <Nav>
      <div className="container">
        <BrandLogoLink to="/">
          <span>Booking</span>
          <span style={{ color: "#3f98eb" }}>.com</span>
        </BrandLogoLink>
        <ul>{navLinks}</ul>
      </div>
    </Nav>
  );
};

export default Navbar;
