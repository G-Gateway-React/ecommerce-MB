import React from "react";
import Categories from "../../components/categories/CategoriesPic";
import Hero from "../../components/hero/Hero";
import {HeroSection} from './styleHome'


const Home = () => {
  return (

    <HeroSection>
      <Hero />
      <Categories />
    </HeroSection>

  );
};

export default Home;
