import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RadioInput from "./RadioInput";
import SearchInput from "./SearchInput";
import SizeFilter from "./SizeFilter";

const Filter = () => {
    return ( 
        <>
            <SearchInput/>
            <hr className="h-[6px] bg-black/50 rounded-3xl my-2" />
            <RadioInput/>
            <fieldset className="mt-5">
                <hr className="h-[6px] bg-black/50 rounded-3xl my-2" />
                <form action="">
                    <BrandFilter/>
                    <hr className="h-[6px] bg-black/50 rounded-3xl mt-8" />
                    <CategoryFilter/>
                </form>
            </fieldset>
            <hr className="h-[6px] bg-black/50 rounded-3xl my-4" />
            <SizeFilter/>
            <hr className="h-[6px] bg-black/50 rounded-3xl mt-3 my-2" />
            <PriceFilter/>
        </>
    );
};

export default Filter;
