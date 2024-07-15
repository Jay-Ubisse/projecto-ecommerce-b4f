import { Header } from "../header";
import { Footer } from "../footer";
import { Envelope, LockKey, ShoppingBag } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const errorStyles = {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "0.2rem",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <main>
      <Header />
      <div className="w-[1200px] h-[700px] flex mx-auto m-10">
        <div className="w-1/2 h-full bg-sky-blue-200 relative flex items-center justify-center">
          <img
            src="./assets/slides/slide-2.jpg"
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
            Iniciar Sessão
          </h2>
          <div className="max-w-md w-full px-6 py-4">
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Endereço de Email
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email é obrigatório!",
                      pattern: {
                        value: /^[^@]+@[^@]+\.[^@]+$/,
                        message: "Email inválido!",
                      },
                    })}
                    placeholder="Endereço de email ou nome de usuário"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                  <Envelope
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>

                {errors.email && (
                  <p style={errorStyles}>{errors.email.message}</p>
                )}
              </div>
              <div className="mt-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Palavra-passe
                </label>
                <div className="mt-2 flex items-center relative">
                  <LockKey
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="password"
                    {...register("password", {
                      required: "Senha obrigatória!",
                      minLength: {
                        value: 6,
                        message: "A senha deve ter pelo menos 6 caracteres.",
                      },
                    })}
                    placeholder="Palavra-passe"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.password && (
                  <p style={errorStyles}>{errors.password.message}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    id="rememberMe"
                    className="mr-2 text-sky-blue-200"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="block text-[15px] font-regular leading-6 text-gray-900"
                  >
                    Lembrar-me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    to="/password-reset"
                    className="font-regular text-[15px] underline text-sky-blue-200 hover:text-orange transition-colors duration-200"
                  >
                    Esqueceu-se da palavra-passe?
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-sky-blue-200 px-2 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-blue-200 uppercase"
              >
                Iniciar sessão
              </button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-500">
              <span className="text-sm font-medium leading-6 text-gray-900 mr-2">
                Não está cadastrado?
              </span>
              <Link
                to="/sign-up"
                className="font-semibold leading-6 text-sky-blue-200 hover:text-orange transition-colors duration-200 underline"
              >
                Criar uma conta
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
