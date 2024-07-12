import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import { ShoppingCard } from "./components/ShoppingCard/ShoppingCard";
import { CardShoppingContext } from "./contexts/CardShoppingContext";
import { useState } from "react";


export const App = () => {
    const [nameProduct,setNameProduct]   = useState("")
    const [priceProduct,setPriceProduct]   = useState(0)
    const [quantityProduct,setQuantityProduct]   = useState(0)
    const [popUp,setPoupUp]= useState(false)
  return (

  

<CardShoppingContext.Provider value={{nameProduct,setNameProduct,priceProduct,setPriceProduct,quantityProduct,setQuantityProduct,popUp,setPoupUp}}>
  <RouterProvider router={route} />
</CardShoppingContext.Provider>

      
     
    
  );
};
