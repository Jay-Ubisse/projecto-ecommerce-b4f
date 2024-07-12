import { MagnifyingGlass } from "@phosphor-icons/react";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

const SearchInput = () => {


    const {searchValue, setSearchValue} = useContext(AppContext)

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
        console.log(searchValue)
      };
    return ( 
        <fieldset className=" flex justify-center items-center mx-2 mt-12 mr-5 mb-10  "> 
        <MagnifyingGlass className="mr-1"/>

        <input 
            type="search" name="search"  
            placeholder="Procurar pelo produto"   
            onChange={handleSearch}
            className=" border border-black/50 rounded-lg text-center text-base 
              hover:border-none w-24 hover:w-full transition-all 
              duration-1000 ease-in-out hover:rounded-xl hover:h-8 hover:duration-700 bg-white " />
        </fieldset>
     );
}
 
export default SearchInput;