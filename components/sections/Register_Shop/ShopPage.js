import React from "react";
import DailySchedule from "./TimeSchedule/DailySchedule";
import OwnerDetails from "./ShopDeatils/OwnerDetails";
import SocialMediaComponent from "./ShopDeatils/SocialMediaComponent";
import RegisterShop from "./ShopDeatils/ShopDetails";

const ShopDeatils = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <OwnerDetails /> */}
      <RegisterShop />
      <DailySchedule />
      <SocialMediaComponent />
    </div>
  );
};

export default ShopDeatils;
