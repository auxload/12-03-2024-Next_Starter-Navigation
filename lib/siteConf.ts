import type { NavItem } from "@/types";
export const navConfig: NavItem[] = [
  {
    label: "Dark",
    icon: "Home",
    path: "/dark",
  },
  {
    label: "About",
    icon: "Book",
    path: "/about",
  },
  {
    label: "Services",
    icon: "Activity",
    // path:"/services"
    subMenu: [
      {
        label: "Service for pooping",
        icon: "Apple",

        path: "/services/service1",
      },
      {
        label: "Service of trher nomber two",
        icon: "AlarmClockOff",
        path: "/services/service2",
      },
    ],
  },
  {
    label: "Contact",
    icon: "Contact",
    path: "/contact",
  },
];


