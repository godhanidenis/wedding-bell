import React from "react";
import { Slider } from "@mui/material";
import CardInteractive from "../CardInteractive/CardInteractive";

const ShopRatingsFilter = ({ setShopPageSkip }) => {
  return (
    <CardInteractive
      cardTitle="Ratings"
      bottomComponent={
        <Slider
          defaultValue={3}
          // value={0}
          // onChange={(e, newRating) => {
          //   setRatings(newRating);
          // }}
          aria-labelledby="continuous-slider"
          valueLabelDisplay="auto"
          min={0}
          max={5}
        />
      }
    />
  );
};

export default ShopRatingsFilter;
