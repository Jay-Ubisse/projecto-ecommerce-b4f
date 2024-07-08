import { useParams } from "react-router-dom";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { products } from "../data/products";
import { ProductDetailsCard } from "../components/product-details-card";

export const ProductDetails = () => {
  const params = useParams();
  const foundProduct = products.find(
    (produto) => produto.id === Number(params.id)
  );

  return (
    <>
      <Header />
      <main>
        {foundProduct ? (
          <ProductDetailsCard
            name={foundProduct.name}
            category={foundProduct.category}
            price={foundProduct.price}
            description={foundProduct.description}
            quantityInStock={foundProduct.quantityInStock}
            imageUrl={foundProduct.imageUrl}
          />
        ) : (
          "Produto não encontrado"
        )}
      </main>
      <Footer />
    </>
  );
};
