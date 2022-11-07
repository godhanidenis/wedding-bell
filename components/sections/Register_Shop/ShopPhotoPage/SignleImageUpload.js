import { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { setLogo } from "../../../../redux/ducks/shop_register";

const SignleImageUpload = () => {
  const [image, setImage] = useState("");
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
      dispatch(setLogo(e.target.files[0]));

      reader.readAsDataURL(e.target.files[0]);
      console.log("????????????????????", e.target.files[0]);
      reader.addEventListener("load", (e) => {
        // console.log("llllllllllllllllllllllll", reader.result);
        setImage(reader.result);
      });
    }
  };

  // const onSubmt = (data) => {
  //   console.log("9999999", data.target.files[0]);
  //   singleUploadApi(data.target.files[0]);
  // };

  return (
    <div>
      <label className="flex justify-center items-center font-bold mb-3">
        Logo
      </label>
      <Container>
        <input
          type="file"
          id="picture"
          name="picture"
          hidden
          {...register("picture")}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              onPreviewImage(e);
              // onSubmt(e);
            }
          }}
        />
        {image !== "" ? (
          <div>
            <Image
              src={image}
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
                    document.getElementById("picture").click();
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
                document.getElementById("picture").click();
              }}
            >
              <AddIcon />
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SignleImageUpload;
