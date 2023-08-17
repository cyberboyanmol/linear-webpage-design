import React from "react";
import classNames from "classnames";
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames(className, "max-w-[120rem] mx-auto px-8")}>
      {children}
    </div>
  );
};

export default Container;

export const IllustrationContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames(className, "max-w-[120rem] mx-auto ")}>
      {children}
    </div>
  );
};
