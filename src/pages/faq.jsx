import { FaqComponents } from "../components/faq";
import { Header } from "../components/header";

export const FAQ = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Perguntas frequentes</h1>
          <FaqComponents/>
      </main>
    </>
  );
};
