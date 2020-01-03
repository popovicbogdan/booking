import React, { useState, useEffect } from "react";
import { login } from "../../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  FormCont,
  InputField,
  Button,
  Label,
  LinkComp,
  Inp
} from "./LoginPage.styled";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    console.log(username);

    console.log(password);
    console.log(isAuthenticated);
  });

  const handleSubmit = e => {
    console.log("handleSubmit");
    e.preventDefault();
    dispatch(login(username, password));
  };

  return isAuthenticated === true ? (
    <Redirect to="/" />
  ) : (
    <FormCont>
      <h3>Ulogujte se</h3>
      <p>
        Možete da se ulogujete putem svog Booking.com naloga kako biste
        pristupili našim uslugama.
      </p>
      <form onSubmit={handleSubmit}>
        <InputField>
          <Label htmlFor="username">Korisničko ime</Label>
          <Inp
            type="text"
            name="username"
            id="username"
            onChange={e => setUsername(e.target.value)}
          />
        </InputField>
        <InputField>
          <Label htmlFor="password">Lozinka</Label>
          <Inp
            type="password"
            name="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </InputField>
        <Button type="submit">Ulogujte se</Button>
      </form>
      <p>
        Još nemate nalog? <LinkComp to="/register">registrujte se</LinkComp>
      </p>
    </FormCont>
  );
};

export default LoginPage;
