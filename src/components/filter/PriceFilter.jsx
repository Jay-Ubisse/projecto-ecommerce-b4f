import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const PriceFilter = () => {
  const { priceFilter, setPriceFilter } = useContext(AppContext)
  const [minPrice, setMinPrice] = useState('0')
  const [maxPrice, setMaxPrice] = useState('')

  const handleApplyFilter = () => {
         if(minPrice && maxPrice >= 0){
    setPriceFilter({ min: Number(minPrice), max: Number(maxPrice) })
    console.log(priceFilter)
   }
  }

  return (
    <fieldset className="flex mt-4 justify-center">
      <label className="m-1">Preço</label>
      <input
        type="text"
        className="w-14 border h-6 rounded-xl text-center hover:w-16 transition-all duration-300 ease-in-out"
        placeholder="Mínimo"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <label htmlFor="">≈</label>
      <input
        type="text"
        className="w-14 border h-6 rounded-xl text-center hover:w-16 transition-all duration-300 ease-in-out"
        placeholder="Máximo"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button
        className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleApplyFilter}
      >
        Aplicar
      </button>
    </fieldset>
  );
};

export default PriceFilter;
