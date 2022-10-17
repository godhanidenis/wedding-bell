import FilterActions from "./FilterActions";
import ProductByShopFilter from "./ProductByShopFilter";
import ProductCategoriesFilter from "./ProductCategoriesFilter";
import ProductColorFilter from "./ProductColorFilter";
import SelectedFilters from "./SelectedFilters";

const Filter = () => {
  return (
    <div className="flex flex-col space-y-4 mb-5 left-0 z-0 top-[150px] sticky ">
      <FilterActions />
      <SelectedFilters />
      <ProductCategoriesFilter />
      <ProductByShopFilter />
      <ProductColorFilter />
    </div>
  );
};

export default Filter;
