import { icons } from "lucide-react";

export interface NavItem {
    label: string;
    icon?: keyof typeof icons;
    path?: string;
    subMenu?: NavItem[];
  }