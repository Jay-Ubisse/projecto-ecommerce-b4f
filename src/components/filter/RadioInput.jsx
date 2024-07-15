import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const RadioInput = () => {
  const { genderFilter, setGenderFilter } = useContext(AppContext);

  const handleGetGender = (event) => {
    setGenderFilter(event.target.value); 
  };

  return (
    <>
      <h2 className="m-1 mt-4">Filtrar Por Gênero:</h2>
      <div className="mt-4">
        <label htmlFor="masculino" className="mx-2">
          <input
            type="radio"
            onChange={handleGetGender}
            name="gender"
            value="Masculino"
            checked={genderFilter === "Masculino"} 
          />
          Masculino
        </label>
        <label htmlFor="feminino" className="ml-1">
          <input
            type="radio"
            onChange={handleGetGender}
            name="gender"
            value="Feminino"
            checked={genderFilter === "Feminino"} 
          />
          Feminino
        </label>
      </div>
    </>
  );
};

export default RadioInput;
