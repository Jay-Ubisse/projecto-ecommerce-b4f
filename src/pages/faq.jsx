import { Header } from "../components/header";
import { FaqComponent } from "../components/faq";

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
        {faq.map(e => <FaqComponent pergunta={e.pergunta} resposta={e.resposta} />)}
        

      </main>
    </>
  );
};
