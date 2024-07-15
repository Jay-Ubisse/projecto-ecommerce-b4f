import { Header } from "../components/header";
import { Footer } from "../components/footer";

import { ProductCard } from "../components/product-card";
import { products } from "../data/products";


export const Products = () => {
  return (
    <div>
      <Header />

      <section className="min-h-[calc(100vh-100px)] flex justify-between">
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
