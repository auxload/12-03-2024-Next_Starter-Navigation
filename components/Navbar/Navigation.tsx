"use client";
import * as Icons from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

export const activeStyle = cva("text-accent-foreground");

import { navConfig as components } from "@/lib/siteConf";
import { NavItem } from "@/types";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";

export const navigationMenuTriggerStyle = cva(
  "group inline-flex  py-2 w-max items-center justify-center rounded-md bg-transparent px-4  text-sm font-medium transition-colors  hover:text-accent-foreground  focus:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 "
);
export function Navigation() {
  const path = usePathname();
  return (
    <NavigationMenu className="hidden md:flex mr-auto">
      <NavigationMenuList className="text-accent-foreground/50">
        {components.map((item) => {
          if (item.subMenu) {
            return (
              <MenuLinkNav
                subMenu={item.subMenu}
                icon={item.icon}
                label={item.label}
                key={item.label}
              />
            );
          }
          return (
            <LinkNav
              active={path}
              label={item.label}
              key={item.label}
              icon={item.icon}
              path={item.path}
            />
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface LinkNav extends NavItem {
  active: string;
}

export const LinkNav = ({ label, icon, path, active }: LinkNav) => {
  const IconComponent = Icons[icon!];
  return (
    <NavigationMenuItem key={label}>
      <Link href={path!} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            `${active === path && activeStyle()}`
          )}
        >
          {IconComponent && <IconComponent className="size-4 mr-1" />}
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
export const MenuLinkNav = ({ label, icon, subMenu }: NavItem) => {
  const IconComponent = Icons[icon!];

  return (
    <NavigationMenuItem key={label}>
      <NavigationMenuTrigger
        className={cn(
          "bg-red-500 bg-transparent h-max hover:bg-transparent py-0  data-[active]:bg-transparent data-[state=open]:bg-transparent"
        )}
      >
        {IconComponent && <IconComponent className="size-4 mr-1" />}
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] ">
          {subMenu?.map((component) => (
            <ListItem
              key={component.label}
              label={component.label}
              path={component.path}
              icon={component.icon}
            ></ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

interface ListProp extends NavItem {
  children?: React.ReactNode;
}

const ListItem = ({ icon, label, children, path }: ListProp) => {
  const IconComponent = Icons[icon!];

  return (
    <li>
      <Link href={path!}>
        <NavigationMenuLink asChild>
          <a
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            )}
          >
            <div className="text-sm font-medium leading-none flex">
              {IconComponent && <IconComponent className="size-4 mr-1" />}
              {label}
            </div>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
};
ListItem.displayName = "ListItem";
