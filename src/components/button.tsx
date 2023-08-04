import Link from "next/link";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
interface ButtonProps extends VariantProps<typeof buttonVariantClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonVariantClasses = cva(
  "relative rounded-full inline-flex items-center ",
  {
    variants: {
      variant: {
        primary: "bg-primary-gradient hover:text-shadow  hover:shadow-pimary",
        secondary: "",
        tertiary: "",
      },
      size: {
        small: "text-xs px-3 h-7",
        medium: "text-sm px-4 h-8",
        large: "text-md px-6 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link href={"/"} className={buttonVariantClasses({ variant, size })}>
      {children}
    </Link>
  );
};

export default Button;
