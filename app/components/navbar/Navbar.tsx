import React from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <div className="fixed w-full bg-white shadow-md">
      <div className="border-b-1"></div>
      <Container>
        <div className="py-4 flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo />
        </div>
      </Container>
    </div>
  );
};
