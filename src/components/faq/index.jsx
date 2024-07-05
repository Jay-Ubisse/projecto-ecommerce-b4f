import { useState } from "react";


export const FaqComponents = ({pergunta, resposta}) => {  
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <div className="py-1 ">
      <button
          className="flex justify-between w-full bg-sky-blue-200 text-white  py-2 px-4 rounded-md mb-2 hover:bg-black focus:outline-none focus:ring-2 focus:ring-cream-100"
          onClick={() => setAberto(!aberto)}
        >
          <span> {pergunta}</span>
          <span>{aberto ? "-" : "+"}</span>
        </button>   

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${aberto ? "max-h-full opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-full"}`}>
          <div className="bg-sky-blue-100 p-2">{resposta}</div>
        </div>
      </div>
    </>
  );
};