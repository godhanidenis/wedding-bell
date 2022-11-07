import { useState } from "react";
import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { setSingleVideo } from "../../../../redux/ducks/shop_register";

const VideoUploadBox = () => {
  const [videoBase64, setVideoBase64] = useState("");
  const dispatch = useDispatch();

  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();
  // const { Logo, backgroudURL, shopImages } = useSelector(
  //   (state) => state.shopReducer
  // );

  const onPreviewImage = (e) => {
    const reader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      dispatch(setSingleVideo(e.target.files[0]));

      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", (e) => {
        setVideoBase64(reader.result);
      });
    }
  };

  return (
    <div className="mt-10">
      <Container>
        <input
          type="file"
          id="vpicture"
          name="picture"
          hidden
          // {...register("picture")}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              onPreviewImage(e);
            }
          }}
        />
        {videoBase64 !== "" ? (
          <div>
            <video
              autoPlay
              style={{ width: "350px", height: "250px" }}
              controls
            >
              <source src={videoBase64} />
            </video>
            <div
              className="bg-gray-300 rounded-full flex justify-center items-center w-32"
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
                    document.getElementById("vpicture").click();
                  }}
                />
              </button>
            </div>
          </div>
        ) : (
          <div
            className="h-32 w-56  border-dashed border-colorSecondary flex justify-center items-center"
            style={{
              borderStyle: "dashed",
              border: "1px dashed #000000",
            }}
          >
            <button
              className="h-24 w-24  border-dashed border-colorSecondary flex justify-center items-center"
              onClick={() => {
                document.getElementById("vpicture").click();
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

export default VideoUploadBox;
