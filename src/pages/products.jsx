import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ProductCard } from "../components/product-card";
import { products } from "../data/products";
import Filter from "../components/filter/Index";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export const Products = () => {
  const { brandFilter, priceFilter, genderFilter, searchValue, sizeFilter, category } =
    useContext(AppContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const passesFilters = (product) => {
      if (genderFilter !== undefined && product.gender !== genderFilter) {
        return false
      }
  
      if (category !== undefined && product.category !== category) {
        return false
      }
  
      if (sizeFilter !== undefined && product.size !== sizeFilter) {
        return false
      }
  
      if (brandFilter !== undefined && product.name !== brandFilter) {
        return false
      }
  
      if (
        priceFilter !== undefined &&
        (product.price < priceFilter.min || product.price > priceFilter.max)
      ) {
        return false
      }
  
      if (searchValue !== undefined && !product.name.startsWith(searchValue)) {
        return false
      }
  
      return true
    };
  
    const updatedProducts = products.filter(passesFilters);
    setFilteredProducts(updatedProducts.length > 0 ? updatedProducts : products);
  }, [brandFilter, priceFilter, genderFilter, searchValue, sizeFilter, category]);
  

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
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </section>
        </main>
        <aside className="w-[18%] p-3 bg-slate-100">
          <Filter />
        </aside>
      </section>
      <Footer />
    </div>
  );
};
