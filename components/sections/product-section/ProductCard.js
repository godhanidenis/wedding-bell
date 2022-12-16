import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { productLikeToggle } from "../../../redux/ducks/userProfile";
import { productLike } from "../../../graphql/mutations/products";
import AuthModal from "../../core/AuthModal";
import { AuthTypeModal } from "../../core/Enum";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const [productLikeByUser, setProductLikeByUser] = useState(false);

  const [open, setOpen] = useState(false);
  const [authTypeModal, setAuthTypeModal] = useState();

  const dispatch = useDispatch();
  const productsFiltersReducer = useSelector(
    (state) => state.productsFiltersReducer
  );
  const { userProfile, isAuthenticate } = useSelector(
    (state) => state.userProfile
  );
  useEffect(() => {
    if (!isAuthenticate) {
      setProductLikeByUser(false);
    }

    const likedProductByUser = userProfile?.product_like_list?.find(
      (itm) => itm.id === product.id
    );

    likedProductByUser
      ? setProductLikeByUser(true)
      : setProductLikeByUser(false);
  }, [isAuthenticate, product.id, userProfile]);

  const items = [
    product.product_image.front,
    product.product_image.back,
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
  const shopId = product.branchInfo?.shop_id;

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
            onClick={() => {
              if (isAuthenticate) {
                productLike({
                  productInfo: {
                    product_id: product.id,
                    user_id: userProfile.id,
                  },
                }).then(
                  (res) => {
                    dispatch(
                      !productLikeByUser
                        ? productLikeToggle({
                            productInfo: {
                              key: "like",
                              value: res.data.productLike.data,
                            },
                          })
                        : productLikeToggle({
                            productInfo: {
                              key: "disLike",
                              value: product.id,
                            },
                          })
                    );
                    toast.success(res.data.productLike.message, {
                      theme: "colored",
                    });
                  },
                  (error) => {
                    toast.error(error.message, { theme: "colored" });
                  }
                );
              } else {
                setOpen(true), setAuthTypeModal(AuthTypeModal.Signin);
              }
            }}
          >
            {!productLikeByUser ? (
              <FavoriteBorderIcon fontSize="small" />
            ) : (
              "❤️"
            )}
          </button>

          <div className="product-overlay">
            <Link href={`/product/${product.id}`}>
              <a target="_blank">
                <button className="text-colorWhite text-base px-4 py-2 w-full md:w-1/2 lg:w-full xl:w-1/2 bg-colorPrimary rounded-md detailButton">
                  See Details
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <div className="flex gap-2 justify-start">
          <div className="flex justify-center items-center">
            <Image
              alt="Shop Logo"
              src={product.branchInfo?.shop_info?.shop_logo}
              width={80}
              height={50}
              className="rounded-[50%]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Link href={`/shop/${shopId}`}>
              <a target="_blank">
                <p className="text-[#000000] text-base font-semibold cursor-pointer hover:text-colorPrimary">
                  {product.branchInfo?.shop_info?.shop_name}
                </p>
              </a>
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
              {product.categoryInfo?.category_name}
            </p>

            <p className="font-semibold text-colorBlack text-lg mt-2">
              {product.product_color}
            </p>
          </div>
        )}
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

export default ProductCard;
