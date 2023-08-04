import React from "react";
import Container from "@/components/container";
import Hero, { HeroSubTitle, HeroTitle } from "@/components/hero";

const HomePage = () => {
  return (
    <main>
      <Container>
        <Hero>
          <HeroTitle>
            Linear is a better way <br />
            to build products
          </HeroTitle>
          <HeroSubTitle>
            Meet the new standard for modern software development.
            <br /> Streamline issues, sprints, and product roadmaps.
          </HeroSubTitle>

          <img src="/image/hero.webp" alt="hero_image" />
        </Hero>
      </Container>
    </main>
  );
};

export default HomePage;
