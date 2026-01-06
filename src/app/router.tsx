import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { Progreso } from "@/pages/Progreso";
import { Posts } from "@/pages/Posts";
import { Users } from "@/pages/Users";
import { NotFound } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Progreso /> },
      { path: "posts", element: <Posts /> },
      { path: "users", element: <Users /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
