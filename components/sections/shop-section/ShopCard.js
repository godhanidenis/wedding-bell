import { Avatar, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

const ShopCard = ({ shop }) => {
  const items = shop.shop_images.map((itm) => {
    return (
      <Image
        src={itm.links}
        alt={shop.name}
        width={200}
        height={250}
        className="rounded"
        key={itm}
      />
    );
  });
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
          {/* <button
            className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
          >
            <Image src={heartIcon} alt="heart" width="12" height="12" />
          </button> */}

          <div className="product-overlay">
            <Link href={`/shop/${shop.id}`} passHref>
              <button className="text-colorWhite text-base px-4 py-2 w-full md:w-1/2 lg:w-full xl:w-1/2 bg-colorPrimary rounded-md detailButton">
                Visit Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 py-3 border-b">
        <div className="flex gap-2 justify-start">
          <div className="flex justify-center items-center">
            <Avatar alt="Shop Logo" src={shop.shop_logo} layout="fill" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#000000] text-base font-semibold cursor-pointer hover:text-colorPrimary">
              {shop.branch_info.map(
                (itm) => itm.branch_type === "main" && itm.branch_name
              )}
            </p>
            <p className="text-[#888888] text-sm font-normal">
              <LocationOnIcon fontSize="small" className="mr-1" />
              {shop.branch_info.map(
                (itm) => itm.branch_type === "main" && itm.branch_address
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 flex justify-between">
        <div className="py-3 w-2/5">
          <p className="font-semibold text-colorBlack text-center">Followers</p>
          <span className="font-medium text-base lg:text-lg flex items-center mt-2 justify-center text-colorBlack">
            {shop.shopFollowerCount}
          </span>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="py-3 w-2/5">
          <p className="font-semibold text-colorBlack text-center">Reviews</p>
          <div className="flex items-center mt-2 justify-center flex-wrap gap-2">
            <div className="border rounded-lg p-1 flex items-center gap-1">
              <StarIcon fontSize="medium" className="text-yellow-400" />
              <p className="text-colorBlack font-semibold">
                {shop.shop_rating}
              </p>
            </div>
            <span className="font-medium text-base lg:text-lg text-colorBlack">
              ({shop.shopReviewCount})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
