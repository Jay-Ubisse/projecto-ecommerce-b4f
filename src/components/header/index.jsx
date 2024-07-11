import { ShoppingBag, User } from "@phosphor-icons/react";
import { NavBar } from "./nav-bar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-sky-blue-200 text-white h-20 px-8 text-lg">
      <h1 className="text-2xl font-bold border border-white p-2">LOGO</h1>
      <section className="flex gap-5">
        <NavBar />
        <Link to="/sign-in">
          <User size={24} weight="bold" />
        </Link>
        <div>
          <ShoppingBag size={24} weight="bold" />
        </div>
      </section>
    </header>
  );
};
