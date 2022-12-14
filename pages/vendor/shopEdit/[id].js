import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";
import { useSelector } from "react-redux";
import { CustomTextField } from "../../../components/core/CustomMUIComponents";
import VendorShopSubHeader from "../../../components/Layout/VendorShopSubHeader";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";

const ShopEdit = () => {
  const [individual, setIndividual] = useState(false);
  const [sameAsOwner, setSameAsOwner] = useState("False");

  const [subBranch, setSubBranch] = useState([]);

  const [subBranchEdit, setSubBranchEdit] = useState();
  const [hours, setHours] = useState([
    { key: "Sunday", value: ["09:00 AM - 08:00 PM"] },
    { key: "Monday", value: ["09:00 AM - 08:00 PM"] },
    { key: "Tuesday", value: ["09:00 AM - 08:00 PM"] },
    { key: "Wednesday", value: ["09:00 AM - 08:00 PM"] },
    { key: "Thursday", value: ["09:00 AM - 08:00 PM"] },
    { key: "Friday", value: ["09:00 AM - 08:00 PM"] },
    { key: "Saturday", value: ["09:00 AM - 08:00 PM"] },
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    reset,
    watch,
    getValues,
    setError,
    control,
  } = useForm();
  return (
    <>
      <VendorShopSubHeader />
      <div className="bg-[#F5F5F5]">
        <div className="container py-10">
          <>
            <>
              <div className="container p-5 mt-5">
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold">Shop</p>
                  <Switch
                    checked={individual}
                    onChange={(e) => setIndividual(e.target.checked)}
                  />
                  <p className="text-lg font-semibold">Individual</p>
                </div>
              </div>
              <div className="container bg-colorWhite rounded-lg my-10 p-5 space-y-5">
                <h3 className="text-colorPrimary text-lg font-semibold leading-8">
                  Owner Details
                </h3>
                <form>
                  <div className="flex flex-col space-y-3">
                    <div className="container flex gap-20 w-full justify-between items-center">
                      <p className="mt-2 flex items-center text-colorBlack text-lg">
                        Name:
                      </p>
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="First Name"
                            variant="standard"
                            className="w-full"
                            {...register("first_name", {
                              required: "FirstName is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.first_name && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.first_name?.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="Last Name"
                            variant="standard"
                            className="w-full"
                            {...register("last_name", {
                              required: "LastName is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.last_name && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.last_name?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center container gap-20">
                      <p className="mt-2 flex items-center justify-between  text-colorBlack text-lg">
                        Email:
                      </p>
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="Email Address"
                            variant="standard"
                            className="w-full"
                            {...register("user_email", {
                              required: "Email is required",

                              pattern: {
                                value:
                                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Please enter a valid email",
                              },
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.user_email && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.user_email?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center container gap-20">
                      <p className="mt-2 flex items-center justify-between  text-colorBlack text-lg">
                        Phone:
                      </p>
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="Phone Number"
                            variant="standard"
                            className="w-full"
                            type="number"
                            {...register("user_contact", {
                              required: "Contact Number is required",
                              minLength: {
                                value: 10,
                                message: "Contact Number must be 10 numbers",
                              },
                              maxLength: {
                                value: 10,
                                message: "Contact Number must be 10 numbers",
                              },
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.user_contact && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.user_contact?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="container bg-colorWhite rounded-lg my-10 p-5 space-y-5">
                <h3 className="text-colorPrimary text-lg font-semibold leading-8">
                  Shop Info
                </h3>
                <form>
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-center container gap-20">
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="Shop Name"
                            variant="standard"
                            className="w-full"
                            {...register("shop_name", {
                              required: "Shop Name is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.shop_name && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.shop_name?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {!individual && (
                      <>
                        <div className="flex items-center justify-center container gap-20">
                          <div className="w-full">
                            <Box sx={{ display: "flex" }}>
                              <CustomTextField
                                id="input-with-sx"
                                label="Shop Email"
                                variant="standard"
                                className="w-full"
                                {...register("shop_email", {
                                  required: "Shop Email is required",

                                  pattern: {
                                    value:
                                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Please enter a valid email",
                                  },
                                })}
                              />
                            </Box>
                            <div className="mt-2">
                              {errors.shop_email && (
                                <span
                                  style={{ color: "red" }}
                                  className="-mb-6"
                                >
                                  {errors.shop_email?.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center container gap-20">
                          <div className="w-full">
                            <Box sx={{ display: "flex" }}>
                              <CustomTextField
                                id="input-with-sx"
                                label="Personal Website"
                                variant="standard"
                                className="w-full"
                                {...register("personal_website", {
                                  required: "Personal Website is required",
                                })}
                              />
                            </Box>
                            <div className="mt-2">
                              {errors.personal_website && (
                                <span
                                  style={{ color: "red" }}
                                  className="-mb-6"
                                >
                                  {errors.personal_website?.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="container flex gap-20 w-full justify-between items-center">
                          <div className="w-full">
                            <Box sx={{ display: "flex" }}>
                              <CustomTextField
                                id="input-with-sx"
                                label="Facebook Link"
                                variant="standard"
                                className="w-full"
                                {...register("facebook_link", {
                                  required: "Facebook Link is required",
                                })}
                              />
                            </Box>
                            <div className="mt-2">
                              {errors.facebook_link && (
                                <span
                                  style={{ color: "red" }}
                                  className="-mb-6"
                                >
                                  {errors.facebook_link?.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-full">
                            <Box sx={{ display: "flex" }}>
                              <CustomTextField
                                id="input-with-sx"
                                label="Instagram Link"
                                variant="standard"
                                className="w-full"
                                {...register("instagram_link", {
                                  required: "Instagram Link is required",
                                })}
                              />
                            </Box>
                            <div className="mt-2">
                              {errors.instagram_link && (
                                <span
                                  style={{ color: "red" }}
                                  className="-mb-6"
                                >
                                  {errors.instagram_link?.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="container flex gap-2 w-full flex-col">
                          <p className="flex items-center text-colorBlack text-lg">
                            Hours
                          </p>
                          <div
                            className="w-full border border-colorBlack p-3 rounded-lg flex items-center justify-between cursor-pointer text-colorBlack text-base font-semibold"
                            onClick={() => {
                              setHoursModalOpen(true);
                            }}
                          >
                            <div>
                              {hours.map((day, index) => (
                                <div
                                  className="flex items-center gap-2"
                                  key={index}
                                >
                                  {day["key"]} :
                                  <div className="flex items-center gap-5">
                                    {day["value"]?.map((time, index) => (
                                      <p key={index}>{time}</p>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <KeyboardArrowRightIcon />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </form>
              </div>
            </>

            {/* <>
              <div className="flex gap-20 items-center container mt-10">
                <div>
                  <label className="flex justify-center items-center font-bold mb-3">
                    Logo
                  </label>
                  <input
                    type="file"
                    id="shopLogo"
                    name="shopLogo"
                    hidden
                    {...register("shopLogo", {
                      required:
                        shopLogo === "" ? "shopLogo is required" : false,
                      onChange: (e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          onShopLogoPreviewImage(e);
                        }
                      },
                    })}
                  />
                  {shopLogo !== "" ? (
                    <div>
                      <Image
                        src={shopLogo}
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
                              document.getElementById("shopLogo").click();
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="h-24 w-24  border-dashed border-colorSecondary flex justify-center items-center"
                      style={{
                        borderStyle: "dashed",
                        border: "1px dashed #000000",
                      }}
                    >
                      <button
                        className="h-24 w-24  border-dashed border-colorSecondary flex justify-center items-center"
                        onClick={() => {
                          document.getElementById("shopLogo").click();
                        }}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  )}
                  <div className="mt-2">
                    {errors.shopLogo && (
                      <span style={{ color: "red" }} className="-mb-6">
                        {errors.shopLogo?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="flex justify-center items-center font-bold  mb-3">
                    Background
                  </label>

                  <input
                    type="file"
                    id="shopBackground"
                    name="shopBackground"
                    hidden
                    {...register("shopBackground", {
                      required:
                        shopBackground === ""
                          ? "shopBackground is required"
                          : false,
                      onChange: (e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          onShopBackgroundPreviewImage(e);
                        }
                      },
                    })}
                  />

                  {shopBackground !== "" ? (
                    <div>
                      <Image
                        src={shopBackground}
                        height="150px"
                        alt="logoimg"
                        width="200px"
                      />
                      <div
                        className="bg-gray-300 rounded-full flex justify-center items-center"
                        style={{
                          position: "relative",
                          left: 180,
                          bottom: 30,
                          height: 30,
                          width: 30,
                          color: "#5cb85c",
                        }}
                      >
                        <EditIcon
                          style={{ color: "black", cursor: "pointer" }}
                          onClick={() =>
                            document.getElementById("shopBackground").click()
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="h-24 w-36  border-dashed border-colorSecondary flex justify-center items-center"
                      style={{
                        borderStyle: "dashed",
                        border: "1px dashed #000000",
                      }}
                    >
                      <button
                        className="h-24 w-36  border-dashed border-colorSecondary flex justify-center items-center"
                        onClick={() => {
                          document.getElementById("shopBackground").click();
                        }}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  )}
                  <div className="mt-2">
                    {errors.shopBackground && (
                      <span style={{ color: "red" }} className="-mb-6">
                        {errors.shopBackground?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 items-center flex-col w-full container">
                <h4 className="font-bold mb-3 flex justify-center items-center">
                  Shop Images
                </h4>

                <div className="flex justify-center flex-col items-center">
                  <div className="flex  justify-center">
                    <Button
                      variant="contained"
                      component="label"
                      className="w-full !capitalize !bg-gray-500 !rounded-3xl"
                    >
                      Choose Shop Images
                      <input
                        type="file"
                        hidden
                        multiple
                        accept="image/*"
                        {...register("shopImages", {
                          required:
                            shopImages.length === 0
                              ? "Shop Image is required"
                              : false,
                          onChange: (e) => {
                            createShopImagesChange(e);
                          },
                        })}
                      />
                    </Button>
                  </div>
                  <div className="mt-2">
                    {errors.shopImages && (
                      <span style={{ color: "red" }} className="-mb-6">
                        {errors.shopImages?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex  justify-center mt-10">
                  <div className="flex flex-col w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                      {shopImages.map((image, index) => (
                        <div key={index}>
                          <Image
                            src={image}
                            alt="Product Preview"
                            height={200}
                            width={250}
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
                                setShopImages(
                                  shopImages.filter((itm) => itm !== image)
                                );
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 items-center flex-col w-full container">
                <h4 className="font-bold mb-3 flex justify-center items-center">
                  Shop Video
                </h4>

                <div className="flex justify-center flex-col items-center">
                  <div className="flex  justify-center">
                    <Button
                      variant="contained"
                      disabled={shopVideo !== ""}
                      component="label"
                      className="w-full !capitalize !bg-gray-500 !rounded-3xl"
                    >
                      Choose Shop Video
                      <input
                        type="file"
                        id="shopVideo"
                        name="shopVideo"
                        accept="video/*"
                        hidden
                        controls
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            onShopVideoPreview(e);
                          }
                        }}
                      />
                    </Button>
                  </div>
                </div>
                {shopVideo !== "" && (
                  <div className="flex  justify-center mt-10">
                    <div className="flex flex-col w-full">
                      <div className="grid grid-cols-1 place-items-center">
                        <div>
                          <video
                            autoPlay
                            style={{ width: "350px", height: "250px" }}
                            controls
                            src={shopVideo}
                          ></video>
                          <div
                            className="bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"
                            style={{
                              position: "relative",
                              left: 335,
                              bottom: 15,
                              height: 30,
                              width: 30,
                              color: "#5cb85c",
                            }}
                          >
                            <button onClick={() => {}}>
                              <EditIcon
                                style={{ color: "black" }}
                                onClick={() => {
                                  document.getElementById("shopVideo").click();
                                }}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </> */}

            <>
              <div className="container bg-colorWhite rounded-lg my-10 p-5 space-y-5">
                <h3 className="text-colorPrimary text-lg font-semibold leading-8">
                  Branches
                </h3>
                <form>
                  <div className="flex flex-col space-y-3">
                    <p className="mt-2 container flex items-center text-colorBlack text-lg">
                      Main Branches
                    </p>
                    <div className="flex items-center justify-center container gap-20">
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="Address"
                            variant="standard"
                            className="w-full"
                            {...register("address", {
                              required: "Address is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.address && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.address?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="container flex gap-20 w-full justify-between items-center">
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="City"
                            variant="standard"
                            className="w-full"
                            {...register("city", {
                              required: "City is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.city && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.city?.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="PinCode"
                            variant="standard"
                            className="w-full"
                            type="number"
                            {...register("pin_code", {
                              required: "PinCode is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.pin_code && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.pin_code?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:justify-center">
                      <div className="mb-4 mt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center container">
                        <span className="font-semibold text-lg text-[#11142D]">
                          Manager : Save as owner
                        </span>

                        <RadioGroup
                          row
                          aria-labelledby="demo-form-control-label-placement"
                          name="position"
                          className="ml-12 sm:ml-0"
                          value={sameAsOwner}
                          onChange={(e) => {
                            if (e.target.value === "True") {
                              setSameAsOwner("True");
                            } else {
                              setSameAsOwner("False");
                            }
                          }}
                        >
                          <FormControlLabel
                            value="True"
                            label="Yes"
                            control={<Radio />}
                          />
                          <FormControlLabel
                            value="False"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="container flex gap-20 w-full justify-between items-center">
                      <p className="mt-2 flex items-center text-colorBlack text-lg">
                        Name:
                      </p>
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="Manager First Name"
                            variant="standard"
                            className="w-full"
                            disabled={sameAsOwner === "True"}
                            {...register("manager_first_name", {
                              required: "Manager FirstName is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.manager_first_name && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.manager_first_name?.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="Manager Last Name"
                            variant="standard"
                            className="w-full"
                            disabled={sameAsOwner === "True"}
                            {...register("manager_last_name", {
                              required: "Manager LastName is required",
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.manager_last_name && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.manager_last_name?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center container gap-20">
                      <p className="mt-2 flex items-center justify-between  text-colorBlack text-lg">
                        Email:
                      </p>
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="Manager Email Address"
                            variant="standard"
                            className="w-full"
                            disabled={sameAsOwner === "True"}
                            {...register("manager_user_email", {
                              required: "Manager Email is required",

                              pattern: {
                                value:
                                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Please enter a valid email",
                              },
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.manager_user_email && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.manager_user_email?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center container gap-20">
                      <p className="mt-2 flex items-center justify-between  text-colorBlack text-lg">
                        Phone:
                      </p>
                      <div className="w-full">
                        <Box sx={{ display: "flex" }}>
                          <CustomTextField
                            id="input-with-sx"
                            label="Manager Phone Number"
                            variant="standard"
                            className="w-full"
                            disabled={sameAsOwner === "True"}
                            type="number"
                            {...register("manager_user_contact", {
                              required: "Manager Contact Number is required",
                              minLength: {
                                value: 10,
                                message:
                                  "Manager Contact Number must be 10 numbers",
                              },
                              maxLength: {
                                value: 10,
                                message:
                                  "Manager Contact Number must be 10 numbers",
                              },
                            })}
                          />
                        </Box>
                        <div className="mt-2">
                          {errors.manager_user_contact && (
                            <span style={{ color: "red" }} className="-mb-6">
                              {errors.manager_user_contact?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {!individual && (
                      <div className="container flex items-center !mt-10">
                        <Button
                          variant="contained"
                          endIcon={<AddIcon />}
                          className="!bg-colorPrimary"
                          onClick={() => setSubBranchModalOpen(true)}
                          disabled={!isValid}
                        >
                          Sub Branch
                        </Button>
                      </div>
                    )}
                  </div>
                </form>
              </div>
              {subBranch.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-colorPrimary text-lg font-semibold leading-8 container my-5">
                    Sub Branches
                  </h3>

                  <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {subBranch.map((sub, index) => (
                      <div
                        className="bg-colorWhite p-5 rounded-xl flex flex-col gap-1"
                        key={index}
                      >
                        <p className="text-lg text-colorBlack">
                          <b className="mr-2 text-lg">Branch Address : </b>
                          {sub.subManagerAddress}
                        </p>
                        <p className="text-lg text-colorBlack">
                          <b className="mr-2 text-lg">Branch City : </b>
                          {sub.subManagerCity}
                        </p>
                        <p className="text-lg text-colorBlack">
                          <b className="mr-2 text-lg">Branch PinCode : </b>
                          {sub.subManagerPinCode}
                        </p>
                        <p className="text-lg text-colorBlack">
                          <b className="mr-2 text-lg">Branch Manager Name :</b>
                          {sub.subManagerFirstName +
                            " " +
                            sub.subManagerLastName}
                        </p>
                        <p className="text-lg text-colorBlack">
                          <b className="mr-2 text-lg">Branch Manager Email :</b>
                          {sub.subManagerEmail}
                        </p>
                        <p className="text-lg text-colorBlack">
                          <b className="mr-2 text-lg">
                            Branch Manager Phone Number :
                          </b>
                          {sub.subManagerPhone}
                        </p>

                        <div className="container mt-5">
                          <Divider />
                        </div>
                        <div className="container mt-5 flex items-center justify-end gap-5">
                          <IconButton
                            aria-label="delete"
                            className="rounded-xl capitalize text-colorBlack p-2 bg-red-600 hover:bg-red-600"
                            onClick={() => {
                              setSubBranch(
                                subBranch.filter((itm) => itm.id !== sub.id)
                              );
                            }}
                          >
                            <DeleteIcon className="text-colorWhite" />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            className="rounded-xl capitalize text-colorBlack p-2 bg-colorStone hover:bg-colorStone"
                            onClick={() => {
                              setSubBranchModalOpen(true);
                              setSubBranchEdit(sub);
                            }}
                          >
                            <EditIcon className="text-colorWhite" />
                          </IconButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>

            {/* <div className="flex justify-center">
              <Box className="flex pt-2 mt-4 w-full container justify-between">
                <button
                  type="submit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={`text-[#544E5D] font-semibold mr-1 bg-[#F9F9FA] hover:bg-[#F9F9FA] px-9 py-3 rounded-xl focus:outline-none focus:shadow-outline ${
                    activeStep === 0 && "cursor-not-allowed"
                  }`}
                >
                  Back
                </button>

                <button
                  type="submit"
                  onClick={handleSubmit(onSubmit, onError)}
                  // onClick={onSubmit}
                  className="bg-colorPrimary hover:bg-colorPrimary mr-1 text-white px-9 py-3 rounded-xl font-semibold focus:outline-none focus:shadow-outline 
                  shadow-lg flex items-center justify-center"
                >
                  {loading && (
                    <CircularProgress
                      size={20}
                      color="primary"
                      sx={{ color: "white", mr: 1 }}
                    />
                  )}
                  {activeStep === 2 ? "Submit" : "Next"}
                </button>
              </Box>
            </div> */}
          </>
        </div>
      </div>
    </>
  );
};

export default ShopEdit;
