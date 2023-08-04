import { title } from "process";
import React from "react";

interface HeroProps {
  children: React.ReactNode;
}
interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroProps) => {
  return <h1 className=" text-8xl my-5 ">{children}</h1>;
};
export const HeroSubTitle = ({ children }: HeroProps) => {
  return <p className="text-lg mb-12 ">{children}</p>;
};

const Hero = ({ children }: HeroElementProps) => {
  return <div>{children}</div>;
};

export default Hero;
