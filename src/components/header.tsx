"use client";
import React, { useEffect, useState } from "react";
import Container from "./container";
import Link from "next/link";
import { Logo } from "./icons/logo";
import Button from "./Button";
import { HamburgerIcon } from "./icons/humbuger";
import classNames from "classnames";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("overflow-hidden", menuIsOpen);
    }
  }, [menuIsOpen]);

  useEffect(() => {
    const closeMenuIsOpen = () => setMenuIsOpen(false);
    window.addEventListener("resize", closeMenuIsOpen);
    window.addEventListener("orientationchange", closeMenuIsOpen);
    return () => {
      window.removeEventListener("resize", closeMenuIsOpen);
      window.removeEventListener("orientationchange", closeMenuIsOpen);
    };
  }, [setMenuIsOpen]);

  return (
    <header className="fixed z-10 top-0 left-0 w-full backdrop-blur-[12px] ">
      <Container className="flex h-navbar-height border-b border-transparent-white ">
        <Link href={"/"} className="flex items-center font-medium text-md">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-2" />
          Linear
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            menuIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navbar-height left-0 h-[calc(100vh_-_var(--navbar-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              menuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a:hover]:text-grey [&_a]:flex  [&_a]:h-navbar-height [&_a]:w-full  [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                menuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="/">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="/">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="/">Integrations</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-auto h-full flex items-center">
          <Link href={"/"} className="text-sm mr-6">
            Log in
          </Link>
          <Button href={"/"}>Sign up</Button>
        </div>
        <button
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="ml-6 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};

export default Header;
