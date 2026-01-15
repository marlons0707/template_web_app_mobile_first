import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { Progress } from "@/pages/Progress";
import { Levels } from "@/pages/Levels";
import { Users } from "@/pages/Users";
import { Settings } from "@/pages/Settings";
import { Streak } from "@/pages/Streak";
import { Insignia } from "@/pages/Insignia";
import { NotFound } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Progress /> },
      { path: "levels", element: <Levels /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
      { path: "streak", element: <Streak /> },
      { path: "insignia", element: <Insignia /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
