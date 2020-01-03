import React, { useState, useEffect } from "react";
import { register } from "../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Button,
  FormCont,
  InputField,
  Label,
  LinkComp
} from "./Login/LoginPage.styled";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(isAuthenticated);
  });

  const handleSubmit = e => {
    console.log("handleSubmit");
    e.preventDefault();
    dispatch(register(username, email, password));
  };

  return isAuthenticated === true ? (
    <Redirect to="/" />
  ) : (
    <FormCont className="container">
      <h3>Kreirajte svoj nalog</h3>
      <p>Kreirajte nalog kako biste jednostavno koristili Booking.com usluge</p>
      <form onSubmit={handleSubmit}>
        <InputField>
          <Label htmlFor="username">Korisničko ime</Label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={e => setUsername(e.target.value)}
          />
        </InputField>
        <InputField>
          <Label htmlFor="email">E-mail</Label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
        </InputField>
        <InputField>
          <Label htmlFor="password">Lozinka</Label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </InputField>
        <Button type="submit">Kreirajte nalog</Button>
      </form>
      <p>
        Već imate nalog? <LinkComp to="/login">Ulogujte se</LinkComp>
      </p>
    </FormCont>
  );
};

export default RegisterPage;
