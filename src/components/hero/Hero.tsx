import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import React from "react";
import Navbar from "../navbar/Navbar";
import {HeroSection} from "./styleHero";

const Hero = () => {
  return (
    <HeroSection>
      <Container sx={{ margin: "0 auto" }}>
        <Navbar navColor={"#fff"} counterColor={"#fff"} />
      </Container>
    </HeroSection>
  );
};

export default Hero;
