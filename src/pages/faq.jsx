import { Header } from "../components/header";
import { FaqComponents } from "../components/faq/index";

export const FAQ = () => {
  const questionsAnswers = [
    {
      question: "Como faço para realizar uma compra?",
      answer: "Para fazer uma compra, basta navegar até o produto desejado, selecionar a quantidade e clicar no botão 'Comprar'. Em seguida, siga as instruções para finalizar o pedido."
    },
    {
      question: "Quais são as opções de pagamento disponíveis?",
      answer: "Aceitamos cartões de crédito (Visa, MasterCard, American Express), boleto bancário e transferência bancária como formas de pagamento."
    },
    {
      question: "Como posso rastrear meu pedido?",
      answer: "Assim que seu pedido for enviado, você receberá um e-mail com o número de rastreamento. Você pode usar esse número no site da transportadora para acompanhar a entrega."
    },
    {
      question: "Qual é a política de devolução da loja?",
      answer: "Aceitamos devoluções dentro de 30 dias após a compra, desde que o produto esteja em condições adequadas e com a embalagem original."
    }
  ];
  return (
    <>
      <Header />
      <main >
        <div  className="mt-20">
          <h1 className="flex justify-center font-bold text-2xl w-full text-sky-blue-200  ">Perguntas Mais Frequentes</h1>
          <div className="px-[250px]  mt-16 ">    
          {questionsAnswers.map(questionAnswer => <FaqComponents className="flex justify-center " question={questionAnswer.question} answer={questionAnswer.answer} />)}
        </div>
        </div>
        <div className="flex justify-center items-center  relative  rad max-w-full h-80 mt-4 ">
          <img src="https://blogdodia.com.br/wp-content/uploads/2018/03/courier-signing-document-H6YTX37-min-1-1568x1046.jpg" alt="Imagem 1" className="w-80 rounded-lg"  />
        <img src="https://www.completecontroller.com/wp-content/uploads/Business-During-the-Summer-Complete-Controller.jpg" alt="Imagem 2"  className="w-80 rounded-md ml-4" />
      <img src="https://th.bing.com/th/id/R.9afdfb0eb36bcadb8f485875dcb9d718?rik=NlnJ37SL7NokzA&pid=ImgRaw&r=0" alt="Imagem 3" className="w-80 rounded-md ml-4" />
      </div>
      </main>
      
    </>
  );
};
