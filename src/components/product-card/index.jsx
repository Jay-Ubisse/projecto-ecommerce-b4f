import { Link } from "react-router-dom";
import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";

export const ProductCard = ({ id, name, category, price, imageUrl }) => {
  const [quantity, setQuantity] = useState(1);
 const increment = () => {
  setQuantity(quantity +1)
 }
 const decrement = () => {
  if (quantity > 0){
    setQuantity(quantity -1)
  }
 }

  return (
    <div className="bg-slate-200 shadow-sm hover:shadow-xl w-[220px] h-[400px] rounded-md p-2">
      <figure className="bg-white h-2/5 rounded-md flex justify-center items-center overflow-hidden">
        <img src={imageUrl} alt="Imagem do produto" className="w-full h-full" />
      </figure>
      <h1 className="text-center font-semibold mt-2 mb-1 text-lg">{name}</h1>
      <h2 className="text-center font-normal mb-2 text-sm">{category}</h2>
      <p className="text-center font-medium mb-2 text-base">
        {price.toFixed(2)} MT
      </p>
      <div className="flex items-center justify-center mt-5 mb-7 border border-sky-blue-200 w-fit mx-auto rounded-md">
        <span className="px-2 hover:cursor-pointer">
          <Minus className="cursor-pointer" onClick={decrement}/>
        </span>
       <p className="w-10 text-center bg-white"> {quantity}</p>
        <span className="px-2 hover:cursor-pointer">
          <Plus className="cursor-pointer" onClick={increment}/>
        </span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <button className="bg-sky-blue-200 text-white font-medium text-sm px-2 py-1 rounded-md hover:bg-sky-blue-200/90">
          Adicionar a carinha
        </button>
        <Link
          to={`/products/${id}`}
          className="bg-transparent text-sky-blue-200 border border-sky-blue-200 font-medium text-sm px-2 py-1 rounded-md hover:bg-sky-blue-200/10"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
};
