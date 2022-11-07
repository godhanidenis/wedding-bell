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
              // console.log("999999999999999999999999999999999", reader.result);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmt = (data, e) => {
    console.log("Kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", data);
    singleUploadApi(data);
  };
  // console.log(Logo);
  // console.log("in RRRREEEEEEEEEEEEEEEDDDDUUUUXXXXXXXXXX", shopImages);
  return (
    <div className="mt-6  ">
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
      <div className="flex space-x-9 justify-center items-center">
        <div>
          <label className="flex justify-center items-center font-bold mb-3">
            Logo
          </label>
          <input
            type="file"
            id="logoida"
            hidden
            onChange={(e) => {
              const reader = new FileReader();

              if (e.target.files && e.target.files.length > 0) {
                reader.readAsDataURL(e.target.files[0]);
                console.log("????????????????????", e.target.files[0]);
                reader.addEventListener("load", (e) => {
                  dispatch(setLogo(reader.result));

                  // console.log("999999999999999999999999999999999", reader.result);
                });
              }
            }}
          />
          {Logo !== "" ? (
            <div>
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
                <button onClick={() => {}}>
                  <EditIcon
                    style={{ color: "black" }}
                    onClick={() => {
                      document.getElementById("logoida").click();
                    }}
                  />
                </button>
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
        </div>

        <div>
          <label className="flex justify-center items-center font-bold  mb-3">
            Background
          </label>

          <form  onSubmit={handleSubmit(onSubmt)}>
            <Button
              type="submit"
              onClick={() => {
                // singleUploadApi(e)
                onSubmt;
              }}
            >
              Submit
            </Button>

            <input
              type="file"
              id="backgroundimg"
              name="picture"
              hidden
              {...register("picture")}
              onChange={(e) => {
                // console.log("*****************************",e.pi)
                // singleUploadApi(e.target.files[0])
                // singleUploadApi(e)
                // const reader = new FileReader();
                // if (e.target.files && e.target.files.length > 0) {
                //   dispatch(setBackgroundImage(e.target.files[0]));
                //   reader.readAsDataURL(e.target.files[0]);
                //   console.log("????????????????????", e.target.files[0]);
                //   reader.addEventListener("load", (e) => {
                //     // dispatch(setBackgroundImage(reader.result));
                //     // dispatch(setBackgroundImage(e));
                //     console.log(
                //       "999999999999999999999999999999999",
                //       reader.result
                //     );
                //   });
                // }
              }}
            />
          </form>

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
                <EditIcon
                  style={{ color: "black" }}
                  onClick={() =>
                    document.getElementById("backgroundimg").click()
                  }
                />
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
      <div className="mt-5 ml-5  items-center flex-col w-full">
        <h4 className="font-bold mb-3 flex justify-center items-center">
          Shop Images
        </h4>
        <div className="flex justify-center flex-col items-center">
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
          {/* <div className="flex space-x-3 grid-rows-3"> */}
          <div className="grid grid-flow-cols grid-cols-10  gap-3">
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
