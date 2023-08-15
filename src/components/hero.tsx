import classNames from "classnames";
import { title } from "process";
import React from "react";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}
interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroProps) => {
  return (
    <h1
      className={classNames(
        "text-gradient my-6 text-6xl  font-medium md:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubTitle = ({ children, className }: HeroProps) => {
  return (
    <p
      className={classNames(
        "mb-12 text-lg text-primary-text  font-medium md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

const Hero = ({ children }: HeroElementProps) => {
  return <div className="text-center ">{children}</div>;
};

export default Hero;
