import React, { useState } from "react";
import { Avatar, Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Modal, Paper, Rating, Select, TextField, Typography } from "@mui/material";
import Filter from "../../components/Filters/index";
import ProductImage from "../../assets/product-image.png";
import Image from "next/image";
import img from "../../assets/logo_Shop.png"
import img1 from "../../assets/shopCoverImage.png"
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from "react-redux";
import { set, useForm } from "react-hook-form";
import { uploadshopProductStart } from "../../redux/ducks/shopproductupload"
import ShopProducts from "../../components/sections/product-section/shopProdcts";
import { Fileupload } from "../../components/helper/Fileupload";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const vendor = () => {
  const [open, setOpen] = React.useState(false);
  const [shopImages, setShopImages] = useState([]);
  const [uploadShopImages, setUploadShopImages] = useState("");
  const [loading, setLoading] = useState(false);
  const [byShop, setByShop] = useState(false);
  const [productPageSkip, setProductPageSkip] = useState(0);
  const [shopPageSkip, setShopPageSkip] = useState(0);
  const [values, setValues] = React.useState([
    "red",
    "blue",
    "Green",
    "yellow"
  ]);
  const [branchaddress, setBranchaddress] = React.useState([
    "Katragam",
    "vesu",
    "addajan",
    "varacha"
  ]);
  const [colorSelected, setcolorSelected] = useState("white");
  // const [selectedbracnaddress, setSelectedbracnaddress] = useState("Katragam");
  const dispatch = useDispatch();
  const { shopProduct } = useSelector(
    (state) => state.shopProduct
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(event) {
    setcolorSelected(event.target.value);
  }

  const submitForm = (data,e) => {
    // e.preventDefault();
    try {
      setLoading(true)
      Fileupload(uploadShopImages)
        .then((res) => {
          setLoading(true)
          dispatch(uploadshopProductStart({
            shopPorduct: [{
              product_color: data.product_color,
              product_description: data.product_description,
              product_name: data.product_name,
              product_image: {
                front: res.data.data.multipleUpload[0],
                back: res.data.data.multipleUpload[1],
                side: res.data.data.multipleUpload[2],
              }
            }]
          }))
          setLoading(false)
          setOpen(false);
          e.target.reset();
        }
        )
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const onChangePicture = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      setUploadShopImages((old) => [...old, file]);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setShopImages((old) => [...old, reader.result]);
      };
    });
  };


  return (
    <>
    
      <div className="container mt-20 w-full">
        {/* <ShopHeaderSection shopDetails={shopDetails.data.shop} /> */}
        <div className=" flex rounded-xl  bg-[#F5F5F5]  overflow-visible">
          {/* <div className="mt-6 z-40 w-1/3"> */}
          <Image
            src={img}
            alt="shop logo"
            width={240}
            height={220}
            className="z-10 rounded-[50%] w-1/3"
            layout="fixed"
          />
          {/* </div> */}
          {/* <div className="z-0 h-fit w-4/3"> */}
          <Image src={img1}
            alt="shop logo"
            // layout="fixed"
            // layout="responsive"
            width={1400}
            height={280}
            className="z-0 rounded"
          />
          {/* </div> */}
        </div>
      </div>
      <div className="bg-colorWhite pb-20 md:pb-28">
        <div className="grid grid-cols-8 gap-2 sm:gap-4 container mt-8">
          <div className="lg:col-span-2 hidden lg:block ">
            <Filter 
             byShop={byShop}
             setByShop={setByShop}
             setProductPageSkip={setProductPageSkip}
             setShopPageSkip={setShopPageSkip}
            />
          </div>
          <div className="col-span-8 lg:col-span-6 bg-[#F5F5F5] rounded-lg">
            <div className="flex flex-row-reverse p-6">
              <button onClick={handleOpen} className=" bg-colorPrimary text-colorGrey text-lg p-2 px-6 rounded-full ">
                Add Photos
              </button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{ ...style, width: "50vw" }}>
                  <form onSubmit={handleSubmit(submitForm)} >
                    <p className="text-3xl text-left mt-2 text-black font-extrabold">Products Details</p>
                    <div className="mt-4  grid-cols-2 gap-4">
                      <p className="text-start text-lg font-bold mt-2 text-black">Name</p>
                      <TextField id="filled-basic" fullWidth size="small" variant="filled"
                        {...register("product_name", {
                          required: "productname is required",
                        })}
                      />
                      <div>
                        {errors.product_name && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.product_name?.message}
                          </span>
                        )}
                      </div>
                      <p className="text-start text-lg font-bold mt-2 text-black">Description</p>
                      <TextField id="filled-basic" fullWidth size="small" variant="filled"
                        {...register("product_description", {
                          required: "productDescription is required",
                        })}
                      />
                      <div>
                        {errors.product_description && (
                          <span style={{ color: "red" }}>
                            {errors.product_description?.message}
                          </span>
                        )}
                      </div>

                      <p className="text-start text-lg font-bold mt-2 text-black">Color</p>
                      <FormControl fullWidth>
                        {/* <InputLabel htmlFor="agent-simple">Colors</InputLabel> */}
                        <Select
                          // value={colorSelected}
                          onChange={handleChange}
                          {...register("product_color", {
                            required: "productcolor is required",
                          })}
                        >
                          {values.map((value, index) => {
                            return <MenuItem value={value} key={index}>{value}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                      <div>
                        {errors.product_color && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.product_color?.message}
                          </span>
                        )}
                      </div>


                      <p className="text-start text-lg font-bold mt-2 text-black">Photos</p>
                      <Box
                        sx={{
                          '& > :not(style)': {
                            m: 1,
                            width: '100%',
                            height: 128,
                            borderStyle: 'dashed',
                          },
                        }}
                      >

                        {shopImages.length === 3 ? "" :
                          <input id="file" type="file"
                            multiple
                            {...register("shopImages", {
                              required:
                                shopImages.length === 0
                                  ? "Shop Image is required"
                                  : false,
                              onChange: (e) => {
                                onChangePicture(e);
                              },
                            })} />}

                        {shopImages.length === 0 ? "" :
                          <div className="flex flex-row">
                            {shopImages.map((image, index) => (
                              <div key={index} className="flex flex-row">
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
                          </div>}
                        {errors.shopImages && (
                          <span style={{ color: "red" }}>
                            {errors.shopImages?.message}
                          </span>
                        )}
                      </Box>

                      <div className="mt-6">
                        <button onClick={handleClose} className=" bg-colorPrimary text-colorGrey text-lg p-2 px-6 rounded-lg ">
                          Cancel
                        </button>
                        <button
                          className="mx-4 bg-colorPrimary text-colorGrey text-lg p-2 px-6 rounded-lg ">
                          {!loading   ? "Add Product" :(
                            <CircularProgress
                              size={20}
                              color="primary"
                              sx={{ color: "white", mr: 1 }}
                            />
                          )}
          
                        </button>
                      </div>
                    </div>
                  </form>
                </Box>
              </Modal>
            </div>
            <div className="container">
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mb-10">
                {shopProduct?.map((shopproduct,id) =>
                  <ShopProducts product={shopproduct} key={id} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default vendor;

