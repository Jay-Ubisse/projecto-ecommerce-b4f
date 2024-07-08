import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./pages/contact";
import { Products } from "./pages/products";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { FAQ } from "./pages/faq";
import { ErrorPage } from "./pages/error-page";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage/>
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "faq",
    element: <FAQ />,
  },
]);
