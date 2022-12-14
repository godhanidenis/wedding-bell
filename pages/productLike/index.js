import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/sections/product-section/ProductCard";
import EmptyCart from "../../assets/images/empty-cart.png";

const ProductLikePage = () => {
  const { userProfile, isAuthenticate } = useSelector(
    (state) => state.userProfile
  );
  return (
    <>
      {userProfile.product_like_list?.length === 0 || !isAuthenticate ? (
        <div className="flex flex-col justify-center bg-[#F5F5F5] my-10 w-[95%] mx-auto gap-5 h-[calc(100vh-573px)] items-center">
          <Image
            src={EmptyCart}
            width={200}
            height={200}
            alt="EmptyCart"
            className="animate__animated animate__slideInDown"
          />
          <h1 className=" font-bold animate__animated animate__slideInUp">
            You have not like any product!!
            <Link href="/" passHref>
              <strong className="text-colorPrimary !font-extrabold underline ml-2 cursor-pointer">
                View Products
              </strong>
            </Link>
          </h1>
        </div>
      ) : (
        <div className="bg-[#F5F5F5] p-5 w-[95%] mx-auto my-10">
          <p className="text-colorBlack font-semibold text-xl">
            Liked Products
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 place-items-center mb-10">
            {userProfile.product_like_list &&
              userProfile.product_like_list?.map((product) => (
                <Link href={`/product/${product.id}`} passHref key={product.id}>
                  <ProductCard product={product} key={product.id} />
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductLikePage;
