import React, { useEffect, useState } from "react";

import DirectoryHero from "../../DirectoryHero/DirectoryHero";
import LandingBg from "../../../assets/landing-page-img.png";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreProductsStart } from "../../../redux/ducks/product";
import Filter from "../../Filters/ProductFilters";
import UpperFilter from "../../Filters/ProductFilters/UpperFilter";
import ProductCard from "../product-section/ProductCard";
import { loadShopsStart } from "../../../redux/ducks/shop";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";
import ShopCard from "../shop-section/ShopCard";
import { loadCategoriesStart } from "../../../redux/ducks/categories";
import { loadAreaListsStart } from "../../../redux/ducks/areaLists";

const LandingPage = () => {
  const dispatch = useDispatch();
  const {
    productsLimit,
    productsCount,
    numOfPages,
    productsData,
    loading,
    error,
  } = useSelector((state) => state.products);
  const { shops } = useSelector((state) => state.shops);

  const [pageSkip, setPageSkip] = useState(0);

  const [byShop, setByShop] = useState(false);
  console.log("pageSkip", pageSkip);

  console.log("productsData", productsData);
  const getMoreProductsList = () => {
    dispatch(
      loadMoreProductsStart({
        search: "",
        pageData: {
          skip: pageSkip,
          limit: 6,
        },
        filter: {},
        pinCode: null,
        // sort: "",
      })
    );
  };

  const getFilterProducts = () => {
    if (categoryId.length > 0) {
      setEmptyState(true);
      dispatch(
        loadProductsStart({
          search: "",
          pageData: {
            skip: 0,
            limit: 50,
          },
          filter: { category_id: categoryId },
          pinCode: null,
        })
      );
    }
  };

  useEffect(() => {
    getMoreProductsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, pageSkip]);

  useEffect(() => {
    dispatch(loadShopsStart());
    dispatch(loadCategoriesStart());
    dispatch(loadAreaListsStart());
  }, [dispatch]);

  return (
    <>
      <DirectoryHero bgImg={LandingBg.src} />

      <div className="grid grid-cols-8 gap-2 sm:gap-4 container mt-8">
        <div className="lg:col-span-2 hidden lg:block ">
          <Filter
            byShop={byShop}
            setByShop={setByShop}
            setPageSkip={setPageSkip}
          />
        </div>
        <div className="col-span-8 lg:col-span-6 bg-[#F5F5F5] rounded-lg">
          <div className="container">
            <UpperFilter setPageSkip={setPageSkip} />

            {!byShop ? (
              <>
                <p className="font-bold text-2xl text-colorBlack">
                  Special Products
                </p>
                <InfiniteScroll
                  className="!overflow-hidden p-0.5"
                  dataLength={productsData.length}
                  next={() => setPageSkip(pageSkip + 6)}
                  hasMore={productsData.length < productsCount}
                  loader={
                    <div className="text-center">
                      <CircularProgress />
                    </div>
                  }
                >
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mb-10">
                    {productsData &&
                      productsData?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                      ))}
                  </div>
                </InfiniteScroll>
              </>
            ) : (
              <>
                <p className="font-bold text-2xl text-colorBlack">
                  Special Shops
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mb-10">
                  {shops &&
                    shops.map((shop) => <ShopCard key={shop.id} shop={shop} />)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
