import { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import { singleUploadApi } from "../../../../services/UploadSingleFile";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import CancelIcon from "@mui/icons-material/Cancel";
import { deleteMultipleShopImageBase64, deleteSingleShopImage, setMultipleShopImage, setMultipleShopImageBase64 } from "../../../../redux/ducks/shop_register";
import { multipleUploadApi } from "../../../../services/multipleImageUpload";

const MultipleShopImagesBox = () => {
  const [shopImageList, setShopImageList] = useState([]);
  const dispatch = useDispatch();
  console.log("first000000000000", shopImageList);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { Logo, backgroudURL, shopImages,shopImgsBase64 } = useSelector(
    (state) => state.shopReducer
  );

  //   const onPreviewImage = (e) => {
  //     const reader = new FileReader();

  //     if (e.target.files && e.target.files.length > 0) {
  //       reader.readAsDataURL(e.target.files[0]);
  //       console.log("????????????????????", e.target.files[0]);
  //       reader.addEventListener("load", (e) => {
  //         console.log("llllllllllllllllllllllll", reader.result);
  //         setBgImage(reader.result);
  //       });
  //     }
  //   };

  //   const onSubmt = (data) => {
  //     console.log("9999999", data.target.files[0]);
  //     // singleUploadApi(data.target.files[0]);
  //   };
  console.log("===================", shopImages.length);
  return (
    <div className="mt-5 ml-5  items-center flex-col w-full">
      <h4 className="font-bold mb-3 flex justify-center items-center">
        Shop Images
      </h4>
      <input
          type="file"
          id="multipleImages"
          name="multipleImages"
          hidden
          onChange={(e) => {
            console.log(
              "999999999999999999999999999999999999",
              e.target.files.length
            );
            if (e.target.files && e.target.files.length > 0) {
              var allImageBase64 = [];
              const imgarr = shopImageList;
              for (const i = 0; i < e.target.files.length; i++) {
                dispatch(setMultipleShopImage(e.target.files[i]));
                const reader = new FileReader();

                reader.readAsDataURL(e.target.files[i]);

                reader.addEventListener("load", (e) => {
                  // console.log("reader.result", reader.result);
                  allImageBase64[i] = reader.result;
                  //   imgarr.concat(allImageBase64[i])
              dispatch(setMultipleShopImageBase64(allImageBase64[i]));

                });
                // const ar=shopImageList.(allImageBase64);
              }
              console.log("||||||||||||||||||||||||||", allImageBase64);
            //   setShopImageList([...shopImageList, ...allImageBase64]);
              //   console.log(shopImages[0]);
              
              


              console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", [
                ...shopImageList,
                ...allImageBase64,
              ]);
            }
          }}
          multiple
        />
      <div className="flex justify-center flex-col items-center">
        {/* <button
          onClick={() => {
            multipleUploadApi(shopImages);
          }}
        >
          Multiple Img
        </button> */}
        
        <div className="grid grid-flow-cols grid-cols-10  gap-3">
          {shopImgsBase64?.map((imgURL, index) => {
            return (
              <>
                <div key={index}>
                  <Image
                    key={index}
                    className="pr-12"
                    src={imgURL}
                    height="150px"
                    alt="logoimg"
                    width="250px"
                    style={{ marginRight: 20 }}
                  />
                  <div
                    className="bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"
                    style={{
                      position: "relative",
                      right: 0,
                      bottom: 25,
                      height: 30,
                      width: 30,
                      color: "#5cb85c",
                    }}
                  >
                    <CancelIcon
                      style={{ color: "black" }}
                      onClick={() => {
                        dispatch(deleteMultipleShopImageBase64(index));
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
      </div>
    </div>
  );
};

export default MultipleShopImagesBox;
