import React, { useEffect, useState } from "react";

import DirectoryHero from "../../DirectoryHero/DirectoryHero";
import LandingBg from "../../../assets/landing-page-img.png";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsStart } from "../../../redux/ducks/product";
import Filter from "../../Filters/ProductFilters";
import UpperFilter from "../../Filters/ProductFilters/UpperFilter";
import ProductCard from "../product-section/ProductCard";
import { loadShopsStart } from "../../../redux/ducks/shop";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";
import Slider from "react-slick";

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

  const getProductsList = () => {
    dispatch(
      loadProductsStart({
        search: "",
        pageData: {
          skip: pageSkip,
          limit: 6,
        },
        filter: {},
      })
    );
  };
  useEffect(() => {
    getProductsList();
    // dispatch(loadShopsStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, pageSkip]);

  return (
    <>
      <DirectoryHero bgImg={LandingBg.src} />

      <div className="grid grid-cols-8 gap-2 sm:gap-4 container mt-8">
        <div className="lg:col-span-2 hidden lg:block ">
          <Filter />
        </div>
        <div className="col-span-8 lg:col-span-6 bg-[#F5F5F5] rounded-lg">
          <div className="container">
            <UpperFilter />

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
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
