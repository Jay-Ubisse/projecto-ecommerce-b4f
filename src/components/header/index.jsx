import { ShoppingBag, User } from "@phosphor-icons/react";
import {  useContext, useState } from "react";

import { NavBar } from "./nav-bar";
import { ShoppingCard } from "../ShoppingCard/ShoppingCard";



import { Link } from "react-router-dom";

import { ShoppingCard } from "../ShoppingCard/ShoppingCard";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);



  const handleShoppingBagClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="flex items-center justify-between bg-sky-blue-200 text-white h-20 text-lg">
      <h1 className="text-2xl font-bold border border-white p-2 ml-8">LOGO</h1>
      <section className="flex gap-5 mr-8">
        <NavBar />
        <Link to="/sign-in">
          <User size={24} weight="bold" />

        </div>
        <div className="flex justify-center cursor-pointer hover:text-red-500 items-center gap-1">
         
          <ShoppingBag size={24} weight="bold" onClick={handleShoppingBagClick} />
          <span className="text-red-500 text-sm absolute top-5 font-medium right-9">0</span>
        </div>
        
      </section>

      <ShoppingCard open={isOpen} onClose={() => setIsOpen(false)} />

    </header>
  );
};
