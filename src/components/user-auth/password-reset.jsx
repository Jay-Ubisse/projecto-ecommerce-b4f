import { Header } from "../header";
import { Footer } from "../footer";
import { useForm } from "react-hook-form";
import { ShoppingBag, Envelope } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className="w-[1200px] h-[700px] flex mx-auto m-10">
        <div className="w-1/2 h-full bg-sky-blue-200 relative flex items-center justify-center">
          <img
            src="./assets/slides/slide-3.jpg"
            alt="clothes"
            className="w-full h-full object-cover"
          />
          <div className="absolute text-center text-white">
            <h2 className="text-5xl font-bold uppercase">
              Fique conectado com a{" "}
              <span className="relative">
                <span className="z-10 relative">maior loja</span>
                <span className="absolute bottom-0 left-0 w-full h-7 bg-orange -z-1"></span>
              </span>{" "}
              de moda do{" "}
              <span className="relative">
                <span className="z-10 relative">mundo</span>
                <span className="absolute bottom-0 left-0 w-full h-7 bg-orange -z-1"></span>
              </span>
              .
            </h2>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white border border-sky-blue-100">
          <p className="mt-4 text-center text-2xl font-thin tracking-tight text-sky-blue-200">
            KuXonGa
          </p>
          <ShoppingBag
            size={22}
            weight="fill"
            className="text-center text-sky-blue-200 mb-4"
          />
          <h2 className="text-center text-2xl font-regular text-gray-900 mb-2 uppercase">
            Recuperar Senha
          </h2>
          <p className="text-center text-md font-light text-gray-900 mb-2 mx-6">
            Introduza o endereço de e-mail associado à sua conta.
          </p>
          <div className="max-w-md w-full px-6 py-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="mt-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Escreva o seu email associado"
                    {...register("email", {
                      required: "Email é obrigatório!",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido!",
                      },
                    })}
                  />
                  <Envelope
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                {errors.email && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-sky-blue-200 px-2 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-blue-200 uppercase"
              >
                Recuperar
              </button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-500">
              <span className="text-sm font-medium leading-6 text-gray-900 mr-2">
                Lembrou da senha?
              </span>
              <Link
                to="/sign-in"
                className="font-semibold leading-6 text-sky-blue-200 hover:text-orange transition-colors duration-200 underline"
              >
                Iniciar Sessão
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
