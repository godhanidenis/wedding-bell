import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopDeatils from "../../components/sections/Register_Shop/ShopPage";
import ShopPhotoPage from "../../components/sections/Register_Shop/ShopPhotoPage/ShopPhotoPage.js";
import DailySchedule from "../../components/sections/Register_Shop/TimeSchedule/DailySchedule";
import { loadShopRegisterStart } from "../../redux/ducks/shop_register";
import ReviewPage from "./ReviewPage/ReviewPage";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { REGISTER_SHOP_MUTATION } from "../../graphql/mutations/shop_register";
import { singleUploadApi } from "../../services/UploadSingleFile";
import { multipleUploadApi } from "../../services/multipleImageUpload";
import { singleVideoUploadApi } from "../../services/videoUploadURL";

// const MINE = gql`
//   mutation CreateShop($type: String!) {
//     createShop(input: { type: $type }) {
//       id
//     }
//   }
// `;

const Shop = () => {
  const registionSteps = ["details", "photos", "previews"];
  const [count, setCount] = useState(2);
  const dispatch = useDispatch();
  const { TimeTable, Logo, shopImages, backgroudURL, shopVideo } = useSelector(
    (state) => state.shopReducer
  );
  // const [createShop] = useMutation(REGISTER_SHOP_MUTATION);
  return (
    <>
      <div className="flex justify-center mt-10 space-x-4">
        {registionSteps.map((index, i) => {
          return (
            <>
              <div
                // className="text-red-800 ml-3  bg-colorPrimary rounded-full"
                className={
                  count < i + 1
                    ? "rounded-full border-gray-400 border-solid border-2 border-spacing-1 w-7 h-7 mr-2 flex justify-center"
                    : "rounded-full border-pink-700 border-solid border-2 border-spacing-1 w-7 h-7 mr-2 flex justify-center"
                }
                // className="rounded-full border-gray-400 border-solid border-2 border-spacing-1 w-7 h-7 mr-2 flex justify-center"
                key={index}
              >
                <button
                  disabled={i + 1 <= count ? false : true}
                  key={i}
                  className={
                    i + 1 <= count ? "text-colorPrimary" : "text-colorBlack"
                  }
                  onClick={() => {
                    setCount(i + 1);
                  }}
                >
                  {/* {index} */}
                  {i + 1}
                </button>
              </div>
            </>
          );
        })}
      </div>

      {count == 1 && <ShopDeatils />}
      {count == 2 && <ShopPhotoPage />}
      {count == 3 && <ReviewPage />}
      <div className="flex justify-end w-3/4 mb-10">
        <button
          className="cursor-pointer text-colorWhite bg-colorPrimary py-2 px-3 rounded ml-2 mt-10"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Next
        </button>
        <button
          className="cursor-pointer text-colorWhite bg-colorPrimary py-2 px-3 rounded ml-2 mt-10"
          onClick={() => {
            singleUploadApi(Logo).then((e) => {
            

              multipleUploadApi(shopImages).then((mres) => {
                
                singleUploadApi(backgroudURL).then((bres) => {
                 
                  singleVideoUploadApi(shopVideo).then((vres) => {
                    console.log("VIDEO----------------", vres);
                    console.log(
                      "?????????????????????????????????????????????????????????"
                    );
                    console.log("111", e);
                    console.log("222", mres);
                    console.log("333", bres);
                    console.log("444", vres);
                    console.log(
                      "?????????????????????????????????????????????????????????"
                    );

                    dispatch(
                      loadShopRegisterStart({
                        ownerInfo: {
                          id: "3",
                          first_name: "shruti",
                          last_name: "italiya",
                          user_email: "shrutiitaliya6@gmail.com",
                          user_contact: "9913383560",
                        },
                        shopInfo: {
                          shop_logo: e.data.data.singleUpload,
                          shop_cover_image: bres.data.data.singleUpload,
                          shop_images: mres.data.data.multipleUpload,
                          shop_video: vres.data.data.singleUpload,
                          form_steps: "",
                          shop_social_link: {
                            facebook: "",
                            instagram: "",
                            website: "",
                          },
                        },
                        branchInfo: [
                          {
                            shop_id: "",
                            branch_name: "shruti",
                            branch_address: "String",
                            branch_pinCode: "String",
                            manager_name: "String",
                            manager_contact: "String",
                            branch_time: [
                              {
                                week: "String",
                                open_time: "String",
                                close_time: "String",
                                is_close: true,
                              },
                            ],
                            branch_type: "String",
                          },
                        ],
                      })
                    );
                  });
                });
              });
            });

            // dispatch(
            //   loadShopRegisterStart({
            //     ownerInfo: {
            //       id: "3",
            //       first_name: "shruti",
            //       last_name: "italiya",
            //       user_email: "shrutiitaliya6@gmail.com",
            //       user_contact: "9913383560",
            //     },
            //     shopInfo: {
            //       shop_logo: "",
            //       shop_cover_image: "",
            //       shop_images: [],
            //       shop_video: "",
            //       form_steps: "",
            //       shop_social_link: {
            //         facebook: "",
            //         instagram: "",
            //         website: "",
            //       },
            //     },
            //     branchInfo: [
            //       {
            //         shop_id: "",
            //         branch_name: "shruti",
            //         branch_address: "String",
            //         branch_pinCode: "String",
            //         manager_name: "String",
            //         manager_contact: "String",
            //         branch_time: [
            //           {
            //             week: "String",
            //             open_time: "String",
            //             close_time: "String",
            //             is_close: true,
            //           },
            //         ],
            //         branch_type: "String",
            //       },
            //     ],
            //   })
            // );
          }}
        >
          submit
        </button>
      </div>

    </>
  );
};

export default Shop;
