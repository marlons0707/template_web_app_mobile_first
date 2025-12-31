export type MenuItem = {
  to: string;
  label: string;
  icon: string;
  end?: boolean;
};

export const primaryMenuItems: MenuItem[] = [
  { to: "/", label: "Inicio", icon: "🏠", end: true },
  { to: "/posts", label: "Posts", icon: "📝" },
  { to: "/users", label: "Usuarios", icon: "👥" },
];

export const secondaryMenuItems: MenuItem[] = [
  { to: "/settings", label: "Configuración", icon: "⚙️" },
  { to: "/help", label: "Ayuda", icon: "❓" },
  { to: "/about", label: "Acerca de", icon: "ℹ️" },
];