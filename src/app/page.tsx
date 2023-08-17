import React from "react";
import Container from "@/components/container";
import Hero, { HeroSubTitle, HeroTitle } from "@/components/hero";
import Button, { Highlight } from "@/components/Button";
import { ChevronRightIcon } from "@/components/icons/chevronrightIcon";
import HeroImage from "@/components/HeroImage";
import { Clients } from "@/components/sections/Clients";
import { StarsIllustration } from "@/components/illustrations/star";
import classNames from "classnames";
import HomePageHero from "@/components/sections/homepage-hero";
import { UnlikeAnyTool } from "@/components/sections/unlike-any-tool";
import { Chronical } from "@/components/illustrations/chronical";

const HomePage = () => {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem] px-5 md:px-8 ">
          <HomePageHero />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>

      <div
        className={classNames(
          "mask-radial-faded pointer-events-none  select-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>

      <UnlikeAnyTool />  
    </>
  );
};

export default HomePage;
