import React from "react";
import Container from "./container";
import Link from "next/link";
import { Logo } from "./icons/logo";
import { TwitterIcon } from "./icons/twitter";
import { GithubIcon } from "./icons/github";
import { SlackIcon } from "./icons/slack";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
      <Container className="flex flex-col lg:flex-row justify-between">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-grey">
              <Logo className="mr-2 h-4 w-4" /> Linear - Designed worldwide
            </div>
            <div className="mt-auto flex space-x-4 text-grey">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((col) => {
            return (
              <div
                className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
                key={col.title}
              >
                <h3 className="mb-3 font-medium">{col.title}</h3>
                <ul>
                  {col.links.map((link) => {
                    return (
                      <li key={link.title} className="[&_a]:last:mb-0">
                        <Link
                          className="mb-3 block text-grey transition-colors hover:text-off-white"
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "/" },
      { title: "Integrations", href: "/" },
      { title: "Pricing", href: "/" },
      { title: "Changelog", href: "/" },
      { title: "Docs", href: "/" },
      { title: "Linear Method", href: "/" },
      { title: "Download", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "/" },
      { title: "Blog", href: "/" },
      { title: "Careers", href: "/" },
      { title: "Customers", href: "/" },
      { title: "Brand", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "/" },
      { title: "Contact", href: "/" },
      { title: "DPA", href: "/" },
      { title: "Terms of service", href: "/" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "/" },
      { title: "Status", href: "/" },
      { title: "GitHub", href: "/" },
    ],
  },
];
