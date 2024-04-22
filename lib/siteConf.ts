import type { NavItem } from "@/types";
export const navConfig: NavItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    subMenu: [
      {
        label: "dark",
        path: "/dark",
      },
      {
        label: "Service of trher nomber two",
        path: "/services/service2",
      },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
