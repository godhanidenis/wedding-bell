import React from "react";
import { Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const productsFiltersReducer = useSelector(
    (state) => state.productsFiltersReducer
  );

  const items = [
    product.product_image.back,
    product.product_image.front,
    product.product_image.side,
  ].map((itm) => {
    return (
      <Image
        src={itm}
        alt={product.name}
        width={250}
        height={productsFiltersReducer.productLayout === "list" ? 300 : 400}
        className="rounded"
        key={itm}
      />
    );
  });
  const shopId =product.branchInfo.shop_id 
  console.log("LLLLLLLLLLL",product.branchInfo.shop_id )
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
      <div className="border-b">
        <div className="container my-[5px] cursor-pointer product-parent-div">
          <div className="grid grid-cols-1  place-items-center">
            <div className="w-[60%]">
              <Slider {...settings}>{items}</Slider>
            </div>
          </div>
          <button
            className={`w-10 h-10 rounded-full transition-colors bg-[#f5f5f5] duration-300 hover:opacity-80  absolute top-0 right-0`}
          >
            <FavoriteBorderIcon fontSize="small" />
          </button>

          <div className="product-overlay">
            <Link href={`/product/${product.id}`} passHref>
              <button className="text-colorWhite text-base px-4 py-2 w-full md:w-1/2 lg:w-full xl:w-1/2 bg-colorPrimary rounded-md detailButton">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <div className="flex gap-2 justify-start">
          <div className="flex justify-center items-center">
            <Avatar
              alt="Shop Logo"
              src={product.branchInfo.shop_info?.shop_logo}
              layout="fill"
            />
          </div>
          <div className="flex flex-col justify-center">
          <Link href={`/shpodetails/${shopId}`}>
            <p className="text-[#000000] text-base font-semibold cursor-pointer hover:text-colorPrimary">
                {product.branchInfo.branch_name || "ShopeName"} 
            </p>
            </Link>
            <p className="text-[#888888] text-sm font-normal">25 days ago</p>
          </div>
        </div>
        {productsFiltersReducer.productLayout === "list" && (
          <div>
            <p className="font-semibold text-colorBlack text-lg mt-2">
              {product.product_name}
            </p>
            <p className="text-[#888888] font-normal text-sm">
              {product.product_description}
            </p>
            <p className="font-semibold text-colorBlack text-lg mt-2">
              {product.categoryInfo.category_name}
            </p>

            <p className="font-semibold text-colorBlack text-lg mt-2">
              {product.product_color}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
