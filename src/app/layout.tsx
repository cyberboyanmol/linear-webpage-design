import Container from "@/components/container";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navbar-height ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
