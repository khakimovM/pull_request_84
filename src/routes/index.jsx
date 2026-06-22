import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Asadbek from "../pages/Asadbek";
import Odiljon from "../pages/Odiljon";
import Salohiddin from "../pages/Salohiddin";
import Orifjon from "../pages/Orifjon";

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
      {
        path:"/orifjon",
        element:<Orifjon />,
      },
      
      { path: "/salohiddin", element: <Salohiddin /> },
    ],
  },
]);
