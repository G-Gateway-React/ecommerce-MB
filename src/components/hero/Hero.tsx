import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../navbar/Navbar";
import {HeroSection} from "./styleHero";
import { HeroH1, 
  HeroP, 
  Button,
} from './styleHero';


const Hero = () => {
  return (
      <HeroSection>
      <Container sx={{margin: '0 auto'}}>
        <Navbar />
      </Container>
      <Container sx={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '89vh'}}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
            <HeroH1><span>NEW</span> COLLECTION</HeroH1>
      <HeroP>
      <br></br>Our Easiest Chuck-On-And-Go Staples Come With A Serious Style Heritage That’s Liberating, Sexy, Comfy And Supremely Cool. 
      </HeroP>
      <br></br>
      <Button>SHOP NEW ARRIVALS </Button>
            </Grid>
            {/* <Grid item xs={6}></Grid> */}
          </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
