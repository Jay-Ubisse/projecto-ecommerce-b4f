import { Link } from "react-router-dom";
import { Header } from "../components/header";
import imgError from "../components/faq/img/img-erro.png"

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="flex justify-center items-center  flex-col mt-72">
        <img src={imgError} alt="Logo da minha aplicação" className="w-[20%] " />
          <div className=" border-b-black flex justify-center flex-col">
            <strong className="text-8xl text-orange">OOPS</strong>
                <p className="text-center text-2xl my-5">
                
                Página não encontrada
                </p>

                <div className="flex justify-center items-center">
                    <Link to="/">
                        {" "}
                        <button className="text-white text-sm border-black border-spacing-4 rounded-2xl bg-black/70 w-40 h-9 hover:bg-sky-blue-200 hover:transition-all duration-700 ease-in-out hover:w-44 m- ">
                        Back To Homepage
                        </button>
                    </Link>
                </div>
          </div>
        </div>
      </main>
    </div>
  );
};
