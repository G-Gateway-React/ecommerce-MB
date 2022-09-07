import React, {useState} from "react";
import { Container } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { FormSection, ButtonForm } from "../login/loginStyle";
import Input from "../../components/input/Input";
import CheckBoxCatalog from "../../components/checkboxCatalog/CheckBoxCatalog";
import { AnchorLink } from "../../components/navbar/styleNavbar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux"
import { useState , useEffect } from "react"
import {getUser} from "../../store/aut";
import {AppDispatch} from '../../store/store'


const schema = yup
    .object()
    .shape({
      email: yup.string().email("must be email").required("email is required"),
      name:yup.string().required("name is required"),
      password: yup.string().min(8).max(16).required("password is required")
    });

type UserSubmitForm = {
    name: string;
    email: string;
    password: string;
};

const Signup = () => {
    const [signUpForm , setSignUpForm] = useState('')
    const dispatch = AppDispatch() ;
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(schema)
  });
    const onSubmit = (data:UserSubmitForm) => {
        const {name, email, password} = data
        dispatch(getUser({name, email, password}))

    };




  return (
    <div>
      <Container>
        <Navbar navColor={"#000"} counterColor={"#D1094B"} />
      </Container>

      <Container>
        <FormSection>
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("name")} placeholder="Name" type="text"  />
              <p>{errors.name?.message}</p>
            <Input {...register("email")} placeholder="email" type="email"/>
              {/*<p>{errors.email?.message}</p>*/}
            <Input {...register("password")} placeholder="password" type="password"  />
              {/*<p>{errors.password?.message}</p>*/}
              <CheckBoxCatalog text={"Remember Me"} />
            <ButtonForm type={"submit"} variant="contained">Login</ButtonForm>
          </form>
          <AnchorLink color={"#d1094b"} to="/signup">
            I have an account
          </AnchorLink>
        </FormSection>
      </Container>
    </div>
  );
};

export default Signup;
