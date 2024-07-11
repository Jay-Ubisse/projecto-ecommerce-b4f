import { LockKey, X } from "@phosphor-icons/react";
import { useState } from "react";

export const ShoppingCard = ({ open, onClose }) => {


  return (
    <div className={`bg-black/45 bg-cover absolute z-10 h-screen w-screen mt-[830px] ${open ? "block" : "hidden"}`}>
      <div className="flex flex-col gap-2 p-2 bg-white text-black w-[22%] 2xl:2xl:h-screen 2xl:ml-[1496px]">
        <div className="flex justify-between gap-44 items-center">
          <h1 className="font-bold text-xl">A minha carrinha</h1>
    
          <X size={20} onClick={onClose} className="cursor-pointer active:border-2 border-black p-1 active:rounded-md" />
        </div>

        <p className="text-zinc-400">A sua carrinha está vazia. Adicione produtos à carrinha.</p>
        <div className="border-t-2 border-b-2 pt-2 pb-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>0 MT</span>
          </div>
          <div className="flex justify-between">
            <span>Taxa de entrega</span>
            <span>0 MT</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>0 MT</span>
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
