import Image from "next/image";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSingleShopImage,
  setBackgroundImage,
  setLogo,
  setMultipleShopImage,
} from "../../../../redux/ducks/shop_register";
import { Button, Input } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import { useForm } from "react-hook-form";
import SignleImageUpload from "./SignleImageUpload";
import BackgroundImgBox from "./BackgroundImgBox";
import MultipleShopImagesBox from "./MultipleShopImagesBox";
import VideoUploadBox from "./VideoUploadBox";

const ImageInputDashedBox = (props) => {
  const { Logo, backgroudURL } = useSelector((state) => state.shopReducer);

  return (
    <>
      <input
        type="file"
        id={props.divId}
        hidden
        onChange={(e) => {
          const reader = new FileReader();

          if (e.target.files && e.target.files.length > 0) {
            reader.readAsDataURL(e.target.files[0]);
            console.log("????????????????????", e.target.files[0]);
            reader.addEventListener("load", (e) => {
              props.clickEvent(reader.result);
            });
          }
        }}
      />

      <div
        className={props.classStyle}
        style={{
          borderStyle: "dashed",
          border: "1px dashed #000000",
        }}
      >
        <button
          className={props.classStyle}
          onClick={() => {
            document.getElementById(props.divId).click();
          }}
        >
          <AddIcon />
        </button>
      </div>
    </>
  );
};

const ShopPhotoPage = () => {
  const dispatch = useDispatch();
  const { Logo, backgroudURL } = useSelector((state) => state.shopReducer);
  const [abc, setAbc] = useState();

  return (
    <div className="mt-6  ">
      <div className="flex space-x-9 justify-center items-center">
        <SignleImageUpload />
        <BackgroundImgBox />
      </div>
      <div className="flex justify-center items-center">
        <VideoUploadBox />
      </div>
      <div>
        <MultipleShopImagesBox />
      </div>
    </div>
  );
};

export default ShopPhotoPage;
