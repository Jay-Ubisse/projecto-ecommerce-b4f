import { useContext, useState } from "react";


import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ProductCard } from "../components/product-card";
import { products } from "../data/products";
import { CardShoppingContext } from "../contexts/CardShoppingContext";
import { CheckCircle } from "@phosphor-icons/react";




export const Products = () => {
const {popUp}  = useContext(CardShoppingContext)

  return (
    <div>
      <Header />

      <div className={`text-center bg-white shadow-md rounded-md w-fit p-3 m-auto absolute lg:left-[35rem] ${popUp?"block":"hidden"}`}>
        <div className="flex justify-center items-center">
          <CheckCircle size={24} fill="green" className="text-white"/>
          <p>Produto adicionado</p>
        </div>
      </div>
      <section
        className="min-h-[calc(100vh-100px)] flex justify-between
      "
      >
        <main className="w-[78%] p-4">
          <h1 className="font-semibold text-sky-blue-200 text-3xl">
            Todos os produtos
          </h1>
          <hr className="h-[6px] bg-sky-blue-200 rounded-3xl w-32 my-2" />

          <section className="mt-10 grid grid-cols-4 justify-items-center gap-3">
            {products.map((product) => {
              return (
                <ProductCard
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  stock = {product.quantityInStock}
                />
              );
            })}
          </section>
        </main>
        <aside className="w-[18%] bg-slate-100">
          <h2>Filtrar Por</h2>
        </aside>
      </section>
      <Footer />
    </div>
  );
};
