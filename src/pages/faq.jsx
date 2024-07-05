import { Header } from "../components/header";
import { FaqComponents } from "../components/faq/index";

export const FAQ = () => {
  const faq = [
    {
      pergunta: "Como faço para realizar uma compra?",
      resposta: "Para fazer uma compra, basta navegar até o produto desejado, selecionar a quantidade e clicar no botão 'Comprar'. Em seguida, siga as instruções para finalizar o pedido."
    },
    {
      pergunta: "Quais são as opções de pagamento disponíveis?",
      resposta: "Aceitamos cartões de crédito (Visa, MasterCard, American Express), boleto bancário e transferência bancária como formas de pagamento."
    },
    {
      pergunta: "Como posso rastrear meu pedido?",
      resposta: "Assim que seu pedido for enviado, você receberá um e-mail com o número de rastreamento. Você pode usar esse número no site da transportadora para acompanhar a entrega."
    },
    {
      pergunta: "Qual é a política de devolução da loja?",
      resposta: "Aceitamos devoluções dentro de 30 dias após a compra, desde que o produto esteja em condições adequadas e com a embalagem original."
    }
  ];
  return (
    <>
      <Header />
      <main>
        <div  className="mt-28">
          <h1 className="flex justify-center font-bold text-2xl w-full text-sky-blue-200 ">Perguntas Mais Frequentes</h1>
          <div className="px-[250px]  mt-16 ">    
          {faq.map(e => <FaqComponents className="flex justify-center " pergunta={e.pergunta} resposta={e.resposta} />)}
        </div>
        </div>
      </main>
    </>
  );
};
