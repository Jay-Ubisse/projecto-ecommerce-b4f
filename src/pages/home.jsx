import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ProdutosMaisVendidosdaSemana } from "../components/produtos/produtosMaisVendidodaSemana";
import { Slider } from "../components/slider/slider";
import { ImageCard } from "../components/image-card/image-card";

export const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <ProdutosMaisVendidosdaSemana />
      <ImageCard />
      <Footer />
    </>
  );
};
