import React from "react";
import MobileNavigation from "./MobileNavigation";
import Branding from "../Branding";
import { Navigation } from "./Navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16 container justify-between flex items-center">
      <Branding />
      <MobileNavigation />
      <Navigation/>
      <div className=" gap-3 hidden md:flex">
            <Button size={"sm"}>Log In</Button>
            <Button variant={"ghost"} size={"sm"}>Sign In</Button>
          </div>
    </header>
  );
};

export default Navbar;
