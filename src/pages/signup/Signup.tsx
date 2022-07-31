import React from "react";
import { Container, Button } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { FormSection, ButtonForm } from "../login/loginStyle";
import Input from "../../components/input/Input";
import CheckBoxCatalog from "../../components/checkboxCatalog/CheckBoxCatalog";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <Container>
        <Navbar navColor={"#000"} counterColor={"#D1094B"} />
      </Container>

      <Container>
        <FormSection>
          <h1>Create Account</h1>
          <form>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <CheckBoxCatalog text={"Remember Me"} />
            <ButtonForm variant="contained">Login</ButtonForm>
          </form>
          <Link to='/login'>I have an account</Link>
        </FormSection>
      </Container>
    </div>
  );
};

export default Signup;
