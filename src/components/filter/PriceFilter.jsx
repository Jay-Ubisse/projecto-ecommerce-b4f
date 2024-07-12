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
    <fieldset className="flex mt-4 ">
      <label className="m-1 mt-0 ml-0 text-sm">Preço</label>
      <input
        type="text"
        className="w-10 border h-6 rounded-xl text-center hover:w-12 transition-all duration-300 ease-in-out"
        placeholder="Min"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <label htmlFor="">≈</label>
      <input
        type="text"
        className="w-10 border h-6 rounded-xl text-center hover:w-12 transition-all duration-300 ease-in-out "
        placeholder="Max"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <div className="">

      <button
        className="ml-2 mr-1 bg-blue-500 flex relative justify-center items-center  hover:bg-blue-700 text-white hover:font-bold py-2 px-4 rounded-lg w-12 h-6 text-xs transition-all duration-300 ease-in-out"
        onClick={handleApplyFilter}
      >
        Aplicar
      </button>

      </div>
    </fieldset>
  );
};

export default PriceFilter;