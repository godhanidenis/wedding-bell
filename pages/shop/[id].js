import React, { useEffect, useState } from "react";
import DirectoryHero from "../../components/DirectoryHero/DirectoryHero";
import ShopLandingBg from "../../assets/shopCoverImage.png";
import {
  Avatar,
  LinearProgress,
  linearProgressClasses,
  Rating,
  TextareaAutosize,
} from "@mui/material";
import Filter from "../../components/Filters/index";
import UpperFilter from "../../components/Filters/UpperFilter/UpperFilter";

import ProductImage from "../../assets/product-image.png";
import heartIcon from "../../assets/svg/heart.svg";
import Image from "next/image";
import Slider from "react-slick";
import { getShopDetails } from "../../graphql/queries/shopQueries";
import ShopHeaderSection from "../../components/sections/shop-section/ShopHeaderSection";
import ProductCard from "../../components/sections/product-section/ProductCard";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { AuthTypeModal } from "../../components/core/Enum";
import AuthModal from "../../components/core/AuthModal";
import { shopReview } from "../../graphql/mutations/shops";
import { toast } from "react-toastify";

const CustomBorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: "#000000",

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#308fe8",
  },
}));

const ShopDetail = ({ shopDetails }) => {
  const [shopProducts, setShopProducts] = useState([]);

  const [stars, setStars] = useState(0);
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [authTypeModal, setAuthTypeModal] = useState();

  const [showAllReview, setShowAllReview] = useState(false);

  const dispatch = useDispatch();
  const { userProfile, isAuthenticate } = useSelector(
    (state) => state.userProfile
  );

  console.log(
    "shopInfo shopInfo",
    shopDetails.data.shop.shop_review.filter((itm) => itm.stars === 5).length
  );

  useEffect(() => {
    shopDetails.data.shop.branch_info.map((itm) =>
      setShopProducts([itm.product_info])
    );
  }, [shopDetails.data.shop.branch_info]);

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
    <div className="bg-colorWhite pb-20 md:pb-28">
      <DirectoryHero bgImg={ShopLandingBg.src} />
      <div className="container">
        <ShopHeaderSection shopDetails={shopDetails.data.shop} />
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
              {/* {shopProducts &&
                shopProducts?.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))} */}
            </div>
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
      <div className="bg-[#F5F5F5] p-4 mt-8 container">
        <div className="mx-2 mt-2">
          <div className="flex gap-7">
            <div className="w-1/2 bg-colorPrimary py-7 px-7 rounded-md">
              <div className="flex justify-between">
                <p className="text-base font-semibold text-white">
                  Rating + Distribution
                </p>
                <div className="flex items-center gap-5">
                  <p className="text-base font-semibold text-white">
                    {shopDetails.data.shop.shopReviewCount} Review
                  </p>
                  <div className="border rounded-lg p-1 flex items-center gap-1 bg-colorWhite">
                    <StarIcon fontSize="medium" className="text-yellow-400" />
                    <p className="text-colorBlack font-semibold">
                      {Math.round(shopDetails.data.shop.shop_rating)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between p-1">
                <div className="flex items-center gap-1">
                  <p className="text-colorWhite font-semibold">5</p>
                  <StarIcon fontSize="medium" className="text-yellow-400" />
                </div>
                <div className="flex">
                  <CustomBorderLinearProgress
                    color="secondary"
                    variant="determinate"
                    value={50}
                  />
                </div>
                <div className="">
                  <p className="text-base font-normal text-white">
                    {
                      shopDetails.data.shop.shop_review.filter(
                        (itm) => itm.stars === 5
                      ).length
                    }{" "}
                    Review
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between p-1">
                <div className="flex items-center gap-1">
                  <p className="text-colorWhite font-semibold">4</p>
                  <StarIcon fontSize="medium" className="text-yellow-400" />
                </div>
                <div className="">
                  <CustomBorderLinearProgress
                    variant="determinate"
                    value={40}
                    setcolor="#5451F9"
                  />
                </div>
                <div className="">
                  <p className="text-base font-normal text-white">{
                      shopDetails.data.shop.shop_review.filter(
                        (itm) => itm.stars === 4
                      ).length
                    }{" "}
                    Review</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between p-1">
                <div className="flex items-center gap-1">
                  <p className="text-colorWhite font-semibold">3</p>
                  <StarIcon fontSize="medium" className="text-yellow-400" />
                </div>
                <div className="">
                  <CustomBorderLinearProgress
                    variant="determinate"
                    value={50}
                    setcolor="#5451F9"
                  />
                </div>
                <div className="">
                  <p className="text-base font-normal text-white">{
                      shopDetails.data.shop.shop_review.filter(
                        (itm) => itm.stars === 3
                      ).length
                    }{" "}
                    Review</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between p-1">
                <div className="flex items-center gap-1">
                  <p className="text-colorWhite font-semibold">2</p>
                  <StarIcon fontSize="medium" className="text-yellow-400" />
                </div>
                <div className="">
                  <CustomBorderLinearProgress
                    variant="determinate"
                    value={50}
                    setcolor="#5451F9"
                  />
                </div>
                <div className="">
                  <p className="text-base font-normal text-white">{
                      shopDetails.data.shop.shop_review.filter(
                        (itm) => itm.stars === 2
                      ).length
                    }{" "}
                    Review</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between p-1">
                <div className="flex items-center gap-1">
                  <p className="text-colorWhite font-semibold">1</p>
                  <StarIcon fontSize="medium" className="text-yellow-400" />
                </div>
                <div className="">
                  <CustomBorderLinearProgress
                    variant="determinate"
                    value={50}
                    setcolor="#5451F9"
                  />
                </div>
                <div className="">
                  <p className="text-base font-normal text-white">{
                      shopDetails.data.shop.shop_review.filter(
                        (itm) => itm.stars === 1
                      ).length
                    }{" "}
                    Review</p>
                </div>
              </div>
              <p className="mt-5 text-colorWhite font-normal text-base">
                Last Review Updated on 20 Apr 2022
              </p>
            </div>
            <div className="w-1/2 p-5 pt-8">
              <p className="text-base font-semibold text-black">
                Review {shopDetails.data.shop.shop_name} Shop
              </p>
              <p className="text-base font-semibold text-black mt-1">
                Rate vendor
              </p>
              <div className="flex justify-between mt-1">
                <p className="text-base font-semibold text-black">
                  Rate our of
                </p>
                <Rating
                  size="large"
                  value={stars}
                  onChange={(e) => setStars(Number(e.target.value))}
                />
              </div>
              <div className="mt-5">
                <TextareaAutosize
                  minRows={3}
                  placeholder="Tell us about experience"
                  className="w-full p-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-6 mt-5">
                <button
                  className="bg-colorPrimary text-white p-2 text-base rounded-md"
                  onClick={() => {
                    if (isAuthenticate) {
                      if (stars > 0 && message !== "") {
                        shopReview({
                          shopInfo: {
                            message: message,
                            shop_id: shopDetails.data.shop.id,
                            stars: stars,
                            user_id: userProfile.id,
                          },
                        }).then(
                          (res) => {
                            console.log("res res", res);
                            toast.success("Review Submitted Successfully!!", {
                              theme: "colored",
                            });
                          },
                          (error) => {
                            toast.error("Review not Submitted!!", {
                              theme: "colored",
                            });
                          }
                        );
                      } else {
                        toast.error("Please Select Review Fields!!", {
                          theme: "colored",
                        });
                      }
                    } else {
                      setOpen(true), setAuthTypeModal(AuthTypeModal.Signin);
                    }
                  }}
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="flex items-center font-bold text-2xl text-colorBlack container mt-10">
        Comments
      </p>

      {!showAllReview &&
        shopDetails.data.shop.shop_review.slice(0, 2).map((review) => {
          return (
            <>
              <div className="flex justify-center container mt-10">
                <div
                  className="grid grid-cols-12 w-full rounded-xl bg-[#F5F5F5]"
                  style={{
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div className="col-span-12">
                    <div className="flex flex-col	sm:flex-row	">
                      <div className="mt-[-16px] ml-[-16px] flex justify-center">
                        <Avatar sx={{ width: 56, height: 56 }} />
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between flex-wrap md:flex-nowrap ml-[2%] mt-2">
                          <div className="flex items-center gap-10">
                            <div className="flex flex-col">
                              <div className="font-semibold text-xl text-[#000000]">
                                {review.user_name}
                              </div>
                              <div className=" text-[#888888]">
                                {review.user_type}
                              </div>
                            </div>
                            <div className="border rounded-lg p-2 flex items-center gap-1">
                              <StarIcon
                                fontSize="medium"
                                className="text-yellow-400"
                              />
                              <p className="text-colorBlack font-semibold">
                                {review.stars}
                              </p>
                            </div>
                          </div>
                          <div className="flex mt-4 mr-5 flex-nowrap items-center">
                            <div className="flex items-center">
                              <p className="text-colorPrimary font-semibold">
                                Reply
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 items-center flex my-5 p-3 text-[#888888] text-base font-normal">
                    {review.message}
                  </div>
                </div>
              </div>
            </>
          );
        })}

      {showAllReview &&
        shopDetails.data.shop.shop_review.map((review) => {
          return (
            <>
              <div className="flex justify-center container mt-10">
                <div
                  className="grid grid-cols-12 w-full rounded-xl bg-[#F5F5F5]"
                  style={{
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div className="col-span-12">
                    <div className="flex flex-col	sm:flex-row	">
                      <div className="mt-[-16px] ml-[-16px] flex justify-center">
                        <Avatar sx={{ width: 56, height: 56 }} />
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between flex-wrap md:flex-nowrap ml-[2%] mt-2">
                          <div className="flex items-center gap-10">
                            <div className="flex flex-col">
                              <div className="font-semibold text-xl text-[#000000]">
                                {review.user_name}
                              </div>
                              <div className=" text-[#888888]">
                                {review.user_type}
                              </div>
                            </div>
                            <div className="border rounded-lg p-2 flex items-center gap-1">
                              <StarIcon
                                fontSize="medium"
                                className="text-yellow-400"
                              />
                              <p className="text-colorBlack font-semibold">
                                {review.stars}
                              </p>
                            </div>
                          </div>
                          <div className="flex mt-4 mr-5 flex-nowrap items-center">
                            <div className="flex items-center">
                              <p className="text-colorPrimary font-semibold">
                                Reply
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 items-center flex my-5 p-3 text-[#888888] text-base font-normal">
                    {review.message}
                  </div>
                </div>
              </div>
            </>
          );
        })}

      <div className="flex items-center mt-10 container">
        <button
          className="bg-colorPrimary text-white px-3 py-2 text-base rounded-md"
          onClick={() => setShowAllReview(!showAllReview)}
        >
          {showAllReview ? "Show Less" : "View All"}
        </button>
      </div>

      <AuthModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        authTypeModal={authTypeModal}
        setAuthTypeModal={setAuthTypeModal}
      />
    </div>
  );
};
export default ShopDetail;

export async function getServerSideProps(context) {
  try {
    const shopId = context.params.id;

    const shopDetails = await getShopDetails({ id: shopId });

    return { props: { shopDetails } };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
