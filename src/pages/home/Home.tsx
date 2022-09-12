import React from "react";
import Categories from "../../components/categories/CategoriesPic";
import Hero from "../../components/hero/Hero";


const Home = () => {
  return (
    <>
    <section>
        <Hero />
    </section>
    <section>
      <Categories />
    </section>
    </>
  );
};

export default Home;
