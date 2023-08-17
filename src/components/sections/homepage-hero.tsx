import React from "react";
import Hero, { HeroSubTitle, HeroTitle } from "../hero";
import Button, { Highlight } from "../Button";
import { ChevronRightIcon } from "../icons/chevronrightIcon";
import HeroImage from "../HeroImage";

const HomePageHero = () => {
  return (
    <Hero className="w-full">
      <Button
        href="/"
        size={"small"}
        className="translate-y-[-1rem] animate-fade-in opacity-0 "
        variant={"secondary"}
      >
        Linear 2022 release - Built for scale <Highlight>{"->"}</Highlight>
      </Button>
      <HeroTitle className=" translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] ">
        Linear is a better way <br className="hidden md:block" />
        to build products
      </HeroTitle>
      <HeroSubTitle className=" translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]  [--animation-duration:1200ms]  ">
        Meet the new standard for modern software development.
        <br className="hidden md:block" /> Streamline issues, sprints, and
        product roadmaps.
      </HeroSubTitle>

      <Button
        className="translate-y-[-1rem] animate-fade-in  opacity-0 [--animation-delay:800ms]"
        href="/"
        variant="primary"
        size="large"
      >
        <span>Get Started </span>
        <Highlight>
          <ChevronRightIcon />
        </Highlight>
      </Button>
      <HeroImage />
    </Hero>
  );
};

export default HomePageHero;
