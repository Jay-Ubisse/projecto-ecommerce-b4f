export const Categories = () => {
  return (
    <div className="flex flex-col max-w-[1400px] m-auto">
      <h1 className="font-bold text-center text-2xl py-2 text-sky-blue-200">
        COMPRE POR CATEGORIA
      </h1>
      <div className="flex items-center gap-8 m-auto py-4 font-bold">
        <div>
          <img
            src="./assets/categoria-mulher.jpg"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
            Roupa Para Mulher
          </p>
        </div>
        <div>
          <img
            src="./assets/categoria-homens.jpg"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
            Roupa Para Homem
          </p>
        </div>
        <div>
          <img
            src="./assets/categoria-bebes.jpg"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
            Bebés e Criança
          </p>
        </div>
        <div>
          <img
            src="./assets/categoria-calcados.jpg"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
            Calçados
          </p>
        </div>
        <div>
          <img
            src="./assets/categoria-acessorios.jpg"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
            Acessórios
          </p>
        </div>
      </div>
    </div>
    /*
       <div>
        <h3>COMPRA POR CATEGORIA</h3>
       </div>
        <div>
       <img src="https://i.pinimg.com/originals/dc/52/07/dc5207236a72fdb0282d821103c39183.jpg" alt="" />
       <img src="https://th.bing.com/th/id/R.5cb901a875dde8742650c02413f61004?rik=L0X5RA5AepMVnw&pid=ImgRaw&r=0" alt="" />
       <img src="https://th.bing.com/th/id/R.2539a4e8f3516df521d536434800f1ec?rik=pJW9lx7jBnEAYw&pid=ImgRaw&r=0" alt="" />
       <img src="https://http2.mlstatic.com/sapato-social-masculino-couro-derby-oxford-brogue-bico-fino-D_NQ_NP_714343-MLB28582975758_112018-F.jpg" alt="" />
        </div>
        */
  );
};
