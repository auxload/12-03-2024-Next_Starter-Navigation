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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navConfig as components } from "@/lib/siteConf";
import { NavItem } from "@/types";
export function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
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

export const LinkNav = ({ label, icon, path }: NavItem) => {
  const IconComponent = Icons[icon!];
  return (
    <NavigationMenuItem key={label}>
      <Link href={path!} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
      <NavigationMenuTrigger>
        {IconComponent && <IconComponent className="size-4 mr-1" />}
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] ">
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

const ListItem = ({ icon, label, children }: ListProp) => {
  const IconComponent = Icons[icon!];

  return (
    <li>
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
