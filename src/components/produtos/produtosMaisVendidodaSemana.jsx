export const ProdutosMaisVendidosdaSemana = () => {
  return (
    <div className="flex flex-col px-8 py-4 w-full m-auto max-w-[1400px]">
      <h2 className="font-bold text-center text-2xl py-2 text-sky-blue-200">
        PROMOÇÕES DA SEMANA
      </h2>
      <div className="flex gap-8 m-6 p-2 relative">
        <div style={{ position: "relative", width: "1200px", height: "400px" }}>
          {" "}
          <img
            className="rounded-2xl m"
            src="https://sveltemag.com/wp-content/uploads/2021/07/how-to-layer-your-outfits.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Imagem 1"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h3 className="text-cream-200 text-6xl text-center hover:text-orange cursor-pointer font-bold">
              INVERNO
            </h3>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl"
            src="https://i.ytimg.com/vi/3XNZtosuYXY/maxresdefault.jpg"
            style={{
              width: "90%",
              height: "100%",
              right: "20%",
              objectFit: "cover",
            }}
            alt="Imagem 2"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "73%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h3 className="text-white text-6xl text-center hover:text-orange cursor-pointer font-bold">
              PRIMAVERA
            </h3>
          </div>
        </div>
      </div>
    </div>

    /*<div className="flex flex-col justify-center">
    <h2>Produtos mais comprados da semana</h2>
    <img
      className="w-32 h-34 md:w-68 md:h-auto p-30 gap-4 md:rounded-none rounded-full mx-auto"
      src="https://i.pinimg.com/originals/08/25/08/082508f6cd8d7615b8b10f263489abf9.jpg"
      alt="Produtos mais comprados"
    />
  </div>*/
  );
};
