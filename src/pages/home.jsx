import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ProdutosMaisVendidosdaSemana } from "../components/produtos/produtosMaisVendidodaSemana";


export const Home = () => {
  return (
    <>
      <Header />
      <ProdutosMaisVendidosdaSemana/>
      <Footer />
    </>
  );
};
