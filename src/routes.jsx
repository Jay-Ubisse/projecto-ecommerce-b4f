import { createBrowserRouter } from "react-router-dom";
import { Contact } from "./pages/contact";
import { Products } from "./pages/products";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { FAQ } from "./pages/faq";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  {
    path: "produtosMaisVendidosdaSemana",
    element: <produtosMaisVendidosdaSemana/>
  }
]);
