"use client";
import React from "react";
import type { NavItem } from "@/types";
import * as Icons from "lucide-react"; // Import all icons from React Lucid
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navConfig } from "@/lib/siteConf";
import { Button } from "../ui/button";
import Branding from "../Branding";
const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className="py-9 px-6 overflow-auto gap-10 flex flex-col "
        >
          <SheetHeader>
            <Branding />
          </SheetHeader>
          <Nav />
          <div className="grid  gap-1 mt-auto">
            <Button>Log In</Button>
            <Button variant={"ghost"}>Sign In</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export const Nav = () => {
  return (
    <NavigationMenu className="max-w-none block " orientation="vertical">
      <NavigationMenuList className="max-w-none block space-x-0 space-y-2 ">
        {navConfig.map((item) => {
          if (item.subMenu) {
            return (
              <MenuItemLink
                key={item.label}
                label={item.label}
                icon={item.icon}
                subMenu={item.subMenu}
              />
            );
          }
          return (
            <ItemLink
              label={item.label}
              path={item.path}
              icon={item.icon}
              key={item.label}
            />
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const MenuItemLink = ({ label, icon, subMenu }: NavItem) => {
  const IconComponent = Icons[icon!];
  return (
    <Collapsible>
      <li>
        <CollapsibleTrigger
          className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}
        >
          {IconComponent && <IconComponent className="size-4 mr-1" />}

          {label}
          <Icons.ChevronDown className="ml-auto relative top-[1px] h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
        </CollapsibleTrigger>
      </li>
      <CollapsibleContent className="flex pl-2 gap-2">
        <div className="bg-primary mt-2 w-[1px]"></div>
        <div className="flex-1 gap-2 pt-2 grid">
          {subMenu?.map((item) => (
            <ItemLink
              key={item.label}
              label={item.label}
              path={item.path}
              icon={item.icon}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
export const ItemLink = ({ label, icon, path }: NavItem) => {
  const IconComponent = Icons[icon!];
  return (
    <NavigationMenuItem className="block w-full max-w-none">
      <Link href={path!} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "max-w-none w-full justify-start"
          )}
        >
          {IconComponent && <IconComponent className="size-4 mr-1" />}
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default MobileNavigation;
