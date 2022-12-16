import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const VendorShopSubHeader = () => {
  const { userProfile } = useSelector((state) => state.userProfile);

  const router = useRouter();

  const setActiveLink = (path) => {
    const withoutLastChunk = router.pathname.slice(
      0,
      router.pathname.lastIndexOf("/")
    );

    return router.pathname === path || withoutLastChunk === path
      ? "text-colorPrimary hover:text-colorPrimary"
      : "text-[#544E5D] hover:opacity-50";
  };
  return (
    <div className="w-full left-0 top-[83px] sticky bg-[#F5F5F5] z-10 shadow-md">
      <div className="container flex items-center">
        <ul className="flex items-center gap-10 p-5">
          <li
            className={`${setActiveLink(
              "/vendor/dashboard"
            )} text-base xl:text-lg`}
          >
            <Link href="/vendor/dashboard">Dashboard</Link>
          </li>
          <li
            className={`${setActiveLink(
              "/vendor/shopEdit"
            )}  text-base xl:text-lg`}
          >
            <Link href={`/vendor/shopEdit/${userProfile.userCreatedShopId}`}>
              Shop
            </Link>
          </li>
          <li
            className={`${setActiveLink(
              "/vendor/products"
            )} text-base xl:text-lg`}
          >
            <Link href="/vendor/products">Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VendorShopSubHeader;
