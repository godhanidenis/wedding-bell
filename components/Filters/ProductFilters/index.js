import ShopByLocation from "../ShopFilters/ShopByLocation";
import FilterActions from "./FilterActions";
import ProductByShopFilter from "./ProductByShopFilter";
import ProductCategoriesFilter from "./ProductCategoriesFilter";
import ProductColorFilter from "./ProductColorFilter";

const Filter = ({ byShop, setByShop, setPageSkip }) => {
  return (
    // <div className="flex flex-col space-y-4 mb-5 left-0 z-0 top-[150px] sticky ">
    <div className="flex flex-col space-y-4 mb-5  ">
      <FilterActions byShop={byShop} setByShop={setByShop} />
      {!byShop ? (
        <>
          <ProductCategoriesFilter setPageSkip={setPageSkip} />
          <ProductByShopFilter />
          <ProductColorFilter />
        </>
      ) : (
        <>
          <ShopByLocation />
        </>
      )}
    </div>
  );
};

export default Filter;
