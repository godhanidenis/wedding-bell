import { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { setBackgroundImage } from "../../../../redux/ducks/shop_register";

const BackgroundImgBox = () => {
  const [bgimage, setBgImage] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { Logo, backgroudURL, shopImages } = useSelector(
    (state) => state.shopReducer
  );

  const onPreviewImage = (e) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      dispatch(setBackgroundImage(e.target.files[0]));

      reader.readAsDataURL(e.target.files[0]);
      console.log("????????????????????", e.target.files[0]);
      reader.addEventListener("load", (e) => {
        // console.log("lllllllllll  lllllllllllll", reader.result);
        setBgImage(reader.result);
      });
    }
  };

  const onSubmt = (data) => {
    console.log("9999999", data.target.files[0]);
    // singleUploadApi(data.target.files[0]);
  };

  return (
    <div>
      <label className="flex justify-center items-center font-bold  mb-3">
        Background
      </label>
      <Container>
        <input
          type="file"
          id="bgpicture"
          name="bgpicture"
          hidden
          {...register("bgpicture")}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              onPreviewImage(e);
            }
          }}
        />
        {bgimage !== "" ? (
          <div>
            <Image src={bgimage} height="150px" alt="logoimg" width="150px" />
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
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => document.getElementById("bgpicture").click()}
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
                document.getElementById("bgpicture").click();
              }}
            >
              <AddIcon />
            </button>
          </div>
        )}

        {/* <form as="form" onSubmit={handleSubmit(onSubmt)}>
        <Box>
          <input
            type="file"
            id="picture"
            name="picture"
            {...register("picture")}
            onChange={onPreviewImage}
          />
        </Box>
        <Box className="previewImage">
          <Image src={image} alt="Preview Image" width={250} height={200} />
        </Box>
        <Button type="submit">Submit</Button>
      </form> */}
      </Container>
    </div>
  );
};

export default BackgroundImgBox;
