import { LuLayoutDashboard, LuTrophy, LuCalendarDays, LuSettings } from "react-icons/lu";
import type { IconType } from "react-icons";

export type MenuItem = {
  to: string;
  label: string;
  icon: IconType;
  end?: boolean;
};

export const menuItems: MenuItem[] = [
  { to: "/", label: "Progreso", icon: LuLayoutDashboard, end: true },
  { to: "/levels", label: "Niveles", icon: LuTrophy },
  { to: "/users", label: "Periodos", icon: LuCalendarDays },
  { to: "/settings", label: "Ajustes", icon: LuSettings },
];