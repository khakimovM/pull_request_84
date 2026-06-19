import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Asadbek from "../pages/Asadbek";
import Odiljon from "../pages/Odiljon";
import Salohiddin from "../pages/Salohiddin";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/asadbek",
        element: <Asadbek />,
      },
      {
        path: "/odiljon",
        element: <Odiljon />,
      },
      { path: "/salohiddin", element: <Salohiddin /> },
    ],
  },
]);
