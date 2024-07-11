import { Header } from "../header";
import { Footer } from "../footer";
import React from "react";
import { useForm } from "react-hook-form";


export const PasswordReset = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };


  return (
    <>
      <Header />
      <div className="w-[1200px] h-[700px] flex mx-auto m-10">
        <div className="w-1/2 h-full bg-sky-blue-200"></div>
        <div className="w-1/2 h-full bg-white border"> 

        <h1 className="ml-16 mt-40 text-2xl font-bold">RECUPERAR PASSWORD</h1>
          <p className="ml-16 mt-8 mr-2">
            Introduza o endereço de e-mail ou o número de telemóvel associado à sua conta.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className="ml-16 mt-4 font-bold opacity-80">Insira o Email</p>
              <input
                type="text"
                className={`text-black/20 font-bold bg-slate-300 focus:border-blue-400 max-w-[500px] w-[500px] h-14 rounded-md ml-16 mt-2 mr-4 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Escreva o seu email aqui..."
                {...register('email', {
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 ml-16 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="text-white font-bold text-center text-xl bg-black max-w-[500px] w-[500px] h-14 rounded-md ml-16 mt-6 mr-4"
              >
                Continuar
              </button>
              <p className="mt-4 text-center">
                Return to <span className="text-blue-400 underline">Sign In</span>
              </p>
            </div>
          </form>
        </div>
        </div>
      <Footer />
    </>
  );
};
