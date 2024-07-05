import { useState } from "react";


export const FaqComponents = () => {  
  const [aberto, setAberto] = useState(false);
  return (
    <>
      <div className="py-2">
      <button
          className="flex justify-between w-full bg-sky-blue-200 text-white py-2 px-4 rounded-md mb-2 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setAberto(!aberto)}
        >
          <span> Como faço para criar uma conta? </span>
          <span>{aberto ? "-" : "+"}</span>
        </button>   

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${aberto ? "max-h-full opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-full"}`}
        >
          <div className="bg-sky-blue-100 p-4">Geralmente, há um botão "Registrar" ou "Criar Conta" na página inicial. Você precisará fornecer seu nome, endereço de e-mail e criar uma senha.</div>
        </div>
      
    </>
  );
};