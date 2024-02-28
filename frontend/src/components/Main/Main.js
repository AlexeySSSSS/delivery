import React from "react";
import Hero from "./Hero/Hero";
import Benefits from "./Benefits/Benefits";
import Garanty from "./Garanty/Garanty";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";

function Main() {
  return (
    <section className="main">
      <>
        <Hero />
        <Benefits />
        <Garanty />
        <Reviews />
        <Contact />
      </>
    </section>
  );
}

export default Main;
