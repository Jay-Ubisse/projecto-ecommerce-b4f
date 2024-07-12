import React, { useContext, useState } from "react";
import { products } from "../../data/products";
import { AppContext } from "../../context/AppContext";

const CategoryFilter = () => {
  const { category, setCategory } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState(category);

  const handleSelectCategory = (event) => {

    setCategory(event.target.value)
  };

  return (
    <>
      <h2 className="mt-4">Filtrar Por Categoria:</h2>
      <div className="mt-1 justify-between flex flex-wrap content-between">
         
            <div>
              <p>Categoria 1</p>
              <input
                type="radio"
                name="category"
                value="Categoria 1"
                onChange={handleSelectCategory}
              />
            </div>

            <div>
              <p>Categoria 2</p>
              <input
                type="radio"
                name="category"
                value="Categoria 2"
                onChange={handleSelectCategory}
              />
            </div>
            <div>
              <p>Categoria 3</p>
              <input
                type="radio"
                name="category"
                value="Categoria 3"
                onChange={handleSelectCategory}
              />
            </div>
            <div>
              <p>Categoria 4</p>
              <input
                type="radio"
                name="category"
                value="Categoria 4"
                onChange={handleSelectCategory}
              />
            </div>
        
   
      </div>
    </>
  );
};

export default CategoryFilter;
