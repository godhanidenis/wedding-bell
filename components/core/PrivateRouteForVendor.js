import React from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken = localStorage.getItem("token");
      const userHaveAnyShop = localStorage.getItem("userHaveAnyShop");

      if (accessToken && userHaveAnyShop) {
        return <WrappedComponent {...props} />;
      }
      Router.push("/vendor/shop-setup");
      return null;
    }
    return null;
  };
};

export default withAuth;
