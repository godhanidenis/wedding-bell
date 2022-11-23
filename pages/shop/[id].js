import React from "react";
import Header from "../../components/Layout/Header";
import DirectoryHero from "../../components/DirectoryHero/DirectoryHero";
import LandingBg from "../../assets/shopbackroundimg.png";
import { Avatar, Button, Rating, TextField, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Filter from "../../components/Filters/index";
import UpperFilter from "../../components/Filters/UpperFilter/UpperFilter";
// import InfiniteScroll from 'react-infinite-scroll-component';
import { shopDetails } from "../../graphql/queries/shopDeatils";
import ProductImage from "../../assets/product-image.png";
import heartIcon from "../../assets/svg/heart.svg";
import Image from "next/image";
import Slider from "react-slick";
// import { useSelector } from 'react-redux';
const ShopDetails = ({}) => {
  const result = {};
  console.log("------------------------>>>>>>", result?.data?.shop);
  const shopInfo = result?.data?.shop;
  const items = [0, 1, 2].map((itm) => {
    return (
      <div className="w-[60%] mx-auto" key={itm}>
        <Image src={ProductImage} alt="dddd" />
      </div>
    );
  });
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Header />
      <DirectoryHero bgImg={LandingBg.src} />
      <div className=" px-4  xl:px-64">
        <div className="rounded-md shadow-md bg-[#F5F5F5] p-4">
          <div className="flex">
            <div className="flex-none w-14 ">
              <Avatar
                sx={{ bgcolor: "#95539B", height: "70px", width: "70px" }}
                alt="Remy Sharp"
                // src={shop.shop_info.shop_logo}
                sizes="80%"
              />
            </div>
            <div className="px-8 grow ">
              <p className="text-xl font-semibold">Shop Name xyz....</p>
              <p>25 days ago</p>
              <p>844 Howard Ave. Plainfield, NJ 07060</p>
            </div>
            <div className="flex-none w-72 border-colorSecondary">
              <div className="flex justify-between">
                <p className="py-2 text-lg font-semibold">Share</p>
                <p className="py-2">
                  <ShareIcon />
                </p>
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    borderRadius: 8,
                    backgroundColor: "#000000",
                    padding: "10px 20px",
                    fontSize: "18px",
                  }}
                  endIcon={<PersonAddIcon />}
                >
                  <Typography color="#FFFFFF"> Follow </Typography>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-end">
            <button
              className="bg-colorPrimary text-white font-bold p-2 rounded-md"
              onClick={() => {}}
            >
              see branches
            </button>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-[#F5F5F5] rounded-md p-4 text-center">
            <p className="text-colorPrimary font-bold">TOTAL PRODUCTS</p>{" "}
            <p className=" text-balck font-bold text-center">25</p>
          </div>
          <div className="bg-[#F5F5F5] rounded-md p-4 text-center">
            <p className="text-colorPrimary font-bold">SHARE</p>{" "}
            <p className=" text-balck font-bold text-center">25</p>
          </div>
          <div className="bg-[#F5F5F5] rounded-md p-4 text-center">
            <p className="text-colorPrimary font-bold">REVIEWS</p>{" "}
            <p className=" text-balck font-bold text-center">
              {shopInfo?.shopReviewCount}
            </p>
          </div>
          <div className="bg-[#F5F5F5] rounded-md p-4 text-center">
            <p className="text-colorPrimary font-bold">FOLLOWERS</p>{" "}
            <p className=" text-balck font-bold text-center">
              {shopInfo?.shopFollowerCount}
            </p>
          </div>
        </div>
      </div>
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
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mb-10">
              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80  absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-lg ">
                <div className="border-b">
                  <div className="container my-[5px] cursor-pointer product-parent-div">
                    <div className="grid grid-cols-1  place-items-center">
                      <div className="w-[60%]">
                        <Slider {...settings}>{items}</Slider>
                      </div>
                    </div>
                    <button
                      className={`w-10 h-10 rounded-full transition-colors duration-300 hover:opacity-80 bg-[#FC4D4D] absolute top-0 right-0`}
                    >
                      <Image
                        src={heartIcon}
                        alt="heart"
                        width="12"
                        height="12"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] p-4 mx-12 mt-8">
        <div className="rounded-md shadow-md  mx-2 mt-2">
          <div class="flex gap-7">
            <div class="w-1/2 bg-colorPrimary p-4 rounded-md">
              <div className="flex justify-between">
                <p className="text-lg font-bold text-white">
                  Rating + Distrbushion
                </p>
                <p className="text-lg font-bold text-white">20 Review</p>
              </div>
            </div>
            <div class="w-1/2 p-4 rounded-md">
              <p className="text-lg font-bold text-black">Reviw Mitvin Shop</p>
              <p className="text-lg font-bold text-black">Rate vendor</p>
              <div className="flex justify-between">
                <p className="text-lg font-bold text-black">Rate our of</p>
                <Rating
                  name="read-only"
                  defaultValue={3}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className="mt-4">
                <TextField
                  id="filled-multiline-static"
                  multiline
                  rows={2}
                  fullWidth
                  defaultValue="Tell us about experince"
                  variant="filled"
                />
              </div>
              <div className="flex justify-end gap-6 mt-4">
                <button
                  className="bg-colorPrimary text-white font-bold p-2 rounded-md"
                  onClick={() => {}}
                >
                  Add photo
                </button>
                <button
                  className="bg-colorPrimary text-white font-bold p-2 rounded-md"
                  onClick={() => {}}
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   try {
//     const shopId = context.params.id;
//     console.log(">>>>>>>", shopId);
//     const result = await shopDetails({ id: shopId });
//     // Pass data to the page via props
//     return { props: { result } };
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
export default ShopDetails;
