import { LockKey, X } from "@phosphor-icons/react";
import { useState, useContext, useEffect } from "react";
import { CardShoppingContext } from "../../contexts/CardShoppingContext";

export const ShoppingCard = ({ open, onClose }) => {
  const {
    nameProduct,
    setNameProduct,
    priceProduct,
    setPriceProduct,
    quantityProduct,
    setQuantityProduct,
  } = useContext(CardShoppingContext);

  const subtotal = priceProduct * quantityProduct,
    taxaDeEntrega = 200,
    total = subtotal + taxaDeEntrega;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div
      className={`bg-black/45 absolute z-10 top-0 left-0  w-full h-full transition-opacity duration-700 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-2 p-4 bg-white text-black w-[29%] ml-[61rem] h-screen 2xl:w-[22%] 2xl:2xl:h-screen 2xl:ml-[1496px]">
        <div className="flex justify-between gap-44 items-center">
          <h1 className="font-bold text-xl">A minha carrinha</h1>

          <X
            size={20}
            onClick={onClose}
            className="cursor-pointer active:border-2 border-black p-1 active:rounded-md"
          />
        </div>
        <div>
          {priceProduct && nameProduct && quantityProduct ? (
            <div>
              <div className="flex justify-between">
                <p>Nome</p>
                <p className="text-zinc-400">{nameProduct}</p>
              </div>
              <div className="flex justify-between">
                <p>preco</p>
                <p className="text-zinc-400">{priceProduct}</p>
              </div>
              <div className="flex justify-between">
                <p>Quantidade</p>
                <p className="text-zinc-400">{quantityProduct}</p>
              </div>
            </div>
          ) : (
            <p className="text-zinc-400">Sua carinha esta vazia</p>
          )}
        </div>
        <div className="border-t-2 border-b-2 pt-2 pb-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{subtotal} MT</span>
          </div>
          <div className="flex justify-between">
            <span>Taxa de entrega</span>
            <span>{!priceProduct ? "0" : taxaDeEntrega.toFixed(2)} MT</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{!priceProduct ? "0" : total.toFixed(2)}MT</span>
          </div>
        </div>
        <button className="bg-sky-blue-200 rounded-md text-white font-semibold hover:bg-sky-blue-100 hover:text-black cursor-pointer hover:duration-700">
          Checkout
        </button>
        <div className="flex gap-2 justify-center items-center">
          <span className="mt-1">
            {" "}
            <LockKey />
          </span>
          <p className="text-black">Compra segura</p>
        </div>
      </div>
    </div>
  );
};
