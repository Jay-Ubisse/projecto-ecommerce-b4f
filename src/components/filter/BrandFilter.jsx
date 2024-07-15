import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { products } from "../../data/products";

const BrandFilter = () => {
  const { setBrandFilter,brandFilter } = useContext(AppContext);

  const handleSelectBrand = (event) => {
    setBrandFilter(event.target.value);
    console.log(brandFilter)
  };

  return (
    <>
      <h2 className="mt-4">Filtrar Por Marca:</h2>
      <label className="m-3 ml-2">Marca</label>
      <select
        name="Marca"
        className="mt-4 rounded-xl w-24 border border-black/50 hover:w-32 transition-all duration-700 ease-in-out text-center"
        onClick={handleSelectBrand}
      >
                 {
                products.map(e => <option key={e.id} value={e.name}>{e.name}</option>)
            }
      </select>
    </>
  );
};

export default BrandFilter;

