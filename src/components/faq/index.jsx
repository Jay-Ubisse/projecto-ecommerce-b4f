import { useState } from "react";


export const FaqComponents = () => {  
  const [aberto, setAberto] = useState(false);
  return (
    <>
      <div>
      <button
         
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