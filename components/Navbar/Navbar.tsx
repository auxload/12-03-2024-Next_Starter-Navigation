import React from "react";
import MobileNavigation from "./MobileNavigation";
import Branding from "../Branding";
import { Navigation } from "./Navigation";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="h-16 container justify-between flex items-center">
      <Branding />
      <MobileNavigation />
      <Navigation />
      <div className=" gap-6 hidden md:flex items-center">
        <Link href={'/'} className={cn(buttonVariants({variant:"default",size:"sm"}))} >Log In</Link>
        <Link href={'/'}>
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
