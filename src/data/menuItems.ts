export type MenuItem = {
  to: string;
  label: string;
  icon: string;
  end?: boolean;
};

export const primaryMenuItems: MenuItem[] = [
  { to: "/", label: "Progreso", icon: "📊", end: true },
  { to: "/levels", label: "Niveles", icon: "🏆" },
  { to: "/users", label: "Periodos", icon: "📅" },
];

export const secondaryMenuItems: MenuItem[] = [
  { to: "/settings", label: "Ajustes", icon: "⚙️" },
  { to: "/help", label: "Ayuda", icon: "❓" },
  { to: "/about", label: "Acerca de", icon: "ℹ️" },
];