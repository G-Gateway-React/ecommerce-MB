import React from "react";
import { Container } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { FormSection, ButtonForm } from "./loginStyle";
import Input from "../../components/input/Input";
import CheckBoxCatalog from "../../components/checkboxCatalog/CheckBoxCatalog";

const Login: React.FC = () => {
  return (
    <div>
      <Container>
        <Navbar navColor={"#000"} counterColor={"#D1094B"} />
      </Container>

      <Container>
        <FormSection>
          <h1>Sign In</h1>
          <form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <CheckBoxCatalog text={'Remember Me'} />
            <ButtonForm variant="contained">Login</ButtonForm>
          </form>
        </FormSection>
      </Container>
    </div>
  );
};

export default Login;
