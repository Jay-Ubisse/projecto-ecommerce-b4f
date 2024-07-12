import { LockKey, X } from "@phosphor-icons/react";
import { useState,useContext } from "react";
import { CardShoppingContext } from "../../contexts/CardShoppingContext";

export const ShoppingCard = ({ open, onClose }) => {

  const {nameProduct,setNameProduct,priceProduct,setPriceProduct,quantityProduct,setQuantityProduct}  = useContext(CardShoppingContext)

  const subtotal=priceProduct*quantityProduct,taxaDeEntrega = 200,total =subtotal+taxaDeEntrega


  return (
    <div className={`bg-black/45 bg-cover absolute z-10 h-screen w-screen mt-[830px] ${open ? "block" : "hidden"}`}>
      <div className="flex flex-col gap-2 p-2 bg-white text-black w-[22%] 2xl:2xl:h-screen 2xl:ml-[1496px]">
        <div className="flex justify-between gap-44 items-center">
          <h1 className="font-bold text-xl">A minha carrinha</h1>
    
          <X size={20} onClick={onClose} className="cursor-pointer active:border-2 border-black p-1 active:rounded-md" />
        </div>
      <div>
            {(priceProduct&&nameProduct&&quantityProduct) ? (
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
            <span>{subtotal.toFixed(2)} MT</span>
          </div>
          <div className="flex justify-between">
            <span>Taxa de entrega</span>
            <span>{taxaDeEntrega} MT</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{total.toFixed(2)} MT</span>
          </div>
        </div>
        <button className="bg-sky-blue-200 rounded-md text-white font-semibold hover:bg-sky-blue-100 hover:text-black cursor-pointer hover:duration-700">Checkout</button>
        <div className="flex gap-2 justify-center items-center">
          <span className="mt-1"> <LockKey /></span>
          <p className="text-black">Compra segura</p>
        </div>
      </div>
    </div>
  );
};
