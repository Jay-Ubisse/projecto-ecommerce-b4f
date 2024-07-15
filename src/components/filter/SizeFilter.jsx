import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SizeFilter = () => {
  const { sizeFilter, setSizeFilter } = useContext(AppContext);

  const handleOption = (event) => {
    setSizeFilter(event.target.value);
    console.log(sizeFilter)
  };

  return ( 
    <fieldset>
      <label htmlFor="size">Tamanho</label>
      <select 
        name="size" 
        value={sizeFilter} 
        onChange={handleOption}
        className="ml-2 rounded-xl w-14 border border-black/50 hover:w-20 transition-all duration-700 ease-in-out text-center"
      >
        <option value="">Selecione...</option>
        <option value="XXS">XXS</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </fieldset>
  );
};

export default SizeFilter;
