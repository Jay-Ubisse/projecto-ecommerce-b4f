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

        <div>
          <div>Geralmente, há um botão "Registrar" ou "Criar Conta" na página inicial. Você precisará fornecer seu nome, endereço de e-mail e criar uma senha.</div>
        </div>
      </div>
    </>
  );
};