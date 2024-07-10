import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import { ShoppingCard } from "./components/ShoppingCard/ShoppingCard";

export const App = () => {
  return (
    <>
      <RouterProvider router={route} />
     
    </>
  );
};
