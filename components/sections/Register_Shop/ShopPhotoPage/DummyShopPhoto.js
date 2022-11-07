// final running code

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
import { Input } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

const ImageInputDashedBox = (props) => {
  const { Logo, backgroudURL } = useSelector((state) => state.shopReducer);
  const [UpdateProfilePictureFile, setUpdateProfilePictureFile] = useState();
  const [SelectedImage, setSelectedImage] = useState();


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

              // setUpdateProfilePictureFile(reader.result);
              // setSelectedImage(URL.createObjectURL(e.target.files[0]));
              console.log("999999999999999999999999999999999", reader.result);
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
  const { Logo, backgroudURL, shopImages } = useSelector(
    (state) => state.shopReducer
  );
  const [abc, setAbc] = useState();

  console.log(Logo);
  console.log("in RRRREEEEEEEEEEEEEEEDDDDUUUUXXXXXXXXXX", shopImages);
  return (
    <div className="ml-7">
      {/* <input
        type="file"
        multiple
        onChange={(e) => {
          const reader = new FileReader();

          if (e.target.files && e.target.files.length > 0) {
            console.log(e.target.files);
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener("load", (e) => {
              // props.clickEvent(reader.result);
              setAbc(reader.result);
              console.log("777777777777777777777777777", e.target.result);
            });
          }
        }}
      /> */}
      {/* {abc && (
        <div>
          <video id="video" width="150" controls height="100">
            <source type="video/mp4" src={abc} />
          </video>
        </div>
      )} */}
      <div className="flex space-x-9">
        {Logo !== "" ? (
          <div>
            <input
              type="file"
              id="logoid"
              hidden
              onChange={(e) => {
                const reader = new FileReader();

                if (e.target.files && e.target.files.length > 0) {
                  reader.readAsDataURL(e.target.files[0]);
                  reader.addEventListener("load", (e) => {
                    props.clickEvent(reader.result);
                  });
                }
              }}
            />
            <Image
              src={Logo}
              height="150px"
              alt="logoimg"
              width="150px"
              style={{ borderRadius: 100 }}
            />
            <div
              className="bg-gray-300 rounded-full flex justify-center items-center"
              style={{
                position: "relative",
                left: 100,
                bottom: 30,
                height: 30,
                width: 30,
                color: "#5cb85c",
              }}
            >
              <EditIcon style={{ color: "black" }} onClick={() => {}} />
            </div>
          </div>
        ) : (
          <ImageInputDashedBox
            key="logoimg"
            classStyle="h-24 w-24  border-dashed border-colorSecondary flex justify-center items-center"
            divId="logoid"
            clickEvent={(data) => {
              dispatch(setLogo(data));
            }}
          />
        )}
        <div>
          {backgroudURL !== "" ? (
            <div>
              <Image
                src={backgroudURL}
                height="150px"
                alt="logoimg"
                width="150px"
                // style={{ borderRadius: 100 }}
              />
              <div
                className="bg-gray-300 rounded-full flex justify-center items-center"
                style={{
                  position: "relative",
                  left: 130,
                  bottom: 30,
                  height: 30,
                  width: 30,
                  color: "#5cb85c",
                }}
              >
                <EditIcon style={{ color: "black" }} onClick={() =>
                   document.getElementById("backid").click()
                } />
              </div>
            </div>
          ) : (
            <ImageInputDashedBox
              key="backgroundimg"
              classStyle="h-24 w-36  border-dashed border-colorSecondary flex justify-center items-center"
              divId="backid"
              clickEvent={(data) => {
                console.log("2nsssssssssssssssssssssssdddddddddddddddddddd");
                dispatch(setBackgroundImage(data));
              }}
            />
          )}
        </div>
      </div>
      <div className="mt-5 ml-5">
        <h4>Shop Images</h4>
        <div>
          <input
            type="file"
            id="multipleImages"
            hidden
            onChange={(e) => {
              // console.log("ooooooooooooooooooooooooo", e.target);

              if (e.target.files && e.target.files.length > 0) {
                const allImageBase64 = [];
                for (const i = 0; i < e.target.files.length; i++) {
                  const reader = new FileReader();

                  // const fdata = e.target.files[i];
                  reader.readAsDataURL(e.target.files[i]);
                  // allImageBase64[i]=reader.result;
                  reader.addEventListener("load", (e) => {
                    // allImageBase64.push(reader.result);
                    allImageBase64[i] = reader.result;
                    // props.clickEvent(reader.result);

                    dispatch(setMultipleShopImage([allImageBase64[i]]));
                  });
                }
                console.log(shopImages[0]);
                // dispatch(setMultipleShopImage(allImageBase64));
                // reader.addEventListener("load", (e) => {
                //   // props.clickEvent(reader.result);
                // //  dispatch(setMultipleShopImage(allImageBase64));
                // });
              }
            }}
            multiple
          />
          <div className="flex space-x-3">
            {shopImages.map((imgURL, index) => {
              return (
                <>
                  <div>
                    <Image
                      key={index}
                      className="pr-12"
                      src={imgURL}
                      height="150px"
                      alt="logoimg"
                      width="150px"
                      style={{ marginRight: 20 }}
                    />
                    <div
                      className="bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"
                      style={{
                        position: "relative",
                        left: 130,
                        // top:1,
                        bottom: 25,
                        height: 30,
                        width: 30,
                        color: "#5cb85c",
                      }}
                    >
                      <CancelIcon
                        style={{ color: "black" }}
                        onClick={() => {
                          dispatch(deleteSingleShopImage(index));
                        }}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div
            className="h-24 w-24 border-dashed border-colorSecondary flex justify-center items-center"
            style={{
              borderStyle: "dashed",
              border: "1px dashed #000000",
            }}
          >
            <button
              className="h-24 w-24 border-dashed border-colorSecondary flex justify-center items-center"
              onClick={() => {
                document.getElementById("multipleImages").click();
              }}
            >
              <AddIcon />
            </button>
          </div>
          {/* <ImageInputDashedBox classStyle="h-24 w-24 border-dashed border-colorSecondary flex justify-center items-center" /> */}
        </div>
      </div>
    </div>
  );
};

export default ShopPhotoPage;
