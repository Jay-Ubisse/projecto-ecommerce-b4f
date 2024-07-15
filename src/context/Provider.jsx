import { useState } from "react";
import { AppContext } from "./AppContext";






const Provider = ({children}) => {
const [brandFilter, setBrandFilter] = useState()
const [priceFilter, setPriceFilter] = useState([])
const [genderFilter, setGenderFilter] = useState()
const [searchValue, setSearchValue] = useState()
const [sizeFilter, setSizeFilter] = useState()
const [category, setCategory] = useState()
    const value = {
        brandFilter, 
        setBrandFilter,
        priceFilter, 
        setPriceFilter,
        genderFilter, 
        setGenderFilter,
        searchValue, 
        setSearchValue,
        sizeFilter, 
        setSizeFilter,
        category, 
        setCategory
    }
    return ( 
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
     );
}
 
export default Provider;