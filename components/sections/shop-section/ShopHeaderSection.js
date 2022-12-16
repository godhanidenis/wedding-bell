import React, { useEffect, useState } from "react";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShareIcon from "@mui/icons-material/Share";
import { shopFollowToggle } from "../../../redux/ducks/userProfile";
import { toast } from "react-toastify";
import { shopFollow } from "../../../graphql/mutations/shops";
import { useDispatch, useSelector } from "react-redux";
import { AuthTypeModal } from "../../core/Enum";
import AuthModal from "../../core/AuthModal";
import { useRouter } from "next/router";

const ShopHeaderSection = ({
  shopDetails,
  totalReview,
  totalFollowers,
  getAllFollowers,
  totalProducts,
}) => {
  console.log("------------------------>>>>>>", shopDetails);
  const [shopFollowByUser, setShopFollowByUser] = useState(false);

  const [open, setOpen] = useState(false);
  const [authTypeModal, setAuthTypeModal] = useState();
  const router = useRouter();

  const dispatch = useDispatch();
  const { userProfile, isAuthenticate } = useSelector(
    (state) => state.userProfile
  );

  useEffect(() => {
    if (!isAuthenticate) {
      setShopFollowByUser(false);
    }

    const followedShopsByUser = userProfile.shop_follower_list?.find(
      (itm) => itm.shop_id === router.query.id
    );

    followedShopsByUser
      ? setShopFollowByUser(true)
      : setShopFollowByUser(false);
  }, [isAuthenticate, router.query.id, shopFollowByUser, userProfile]);

  return (
    <>
      <div className="flex justify-center container">
        <div className="grid grid-cols-12 w-full mt-[-50px] rounded-xl bg-[#F5F5F5] pl-[4%] pr-[4%]">
          <div className="col-span-12">
            <div className="flex flex-col	sm:flex-row	">
              <div className="mt-[-40px] sm:mt-[-50px] flex justify-center">
                <Image
                  src={shopDetails.shop_logo}
                  alt="shop logo"
                  layout="fixed"
                  width={150}
                  height={150}
                  className="rounded-[50%]"
                />
              </div>
              <div className="flex flex-col w-full ml-[4%]">
                <div className="flex justify-between flex-wrap md:flex-nowrap">
                  <div className="flex flex-col mt-5">
                    <div className="font-semibold text-2xl text-[#000000]">
                      {shopDetails.shop_name}
                    </div>
                    <div className=" text-[#888888]">15 days ago</div>
                    <p className="text-[#888888] text-sm font-normal">
                      <LocationOnIcon fontSize="small" className="mr-1" />
                      {shopDetails.branch_info.map(
                        (itm) =>
                          itm.branch_type === "main" && itm.branch_address
                      )}
                    </p>
                  </div>
                  <div className="flex mt-4 flex-nowrap items-center gap-5">
                    <div className="flex items-center gap-2">
                      <p className="text-colorBlack font-semibold">Share</p>
                      <div className="bg-colorWhite p-2 rounded-[50%] cursor-pointer">
                        <ShareIcon className="!text-colorBlack" />
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      className={`rounded-2xl  ${
                        shopFollowByUser
                          ? "bg-green-500 hover:bg-green-500"
                          : "bg-colorBlack hover:bg-colorBlack"
                      } 
                      py-2 px-4 !flex !items-center !justify-center`}
                      endIcon={<PersonAddIcon fontSize="large" />}
                      onClick={() => {
                        if (isAuthenticate) {
                          shopFollow({
                            shopInfo: {
                              shop_id: router.query.id,
                              user_id: userProfile.id,
                            },
                          }).then(
                            (res) => {
                              dispatch(
                                !shopFollowByUser
                                  ? shopFollowToggle({
                                      shopInfo: {
                                        key: "follow",
                                        value: res.data.shopFollower.data,
                                      },
                                    })
                                  : shopFollowToggle({
                                      shopInfo: {
                                        key: "unFollow",
                                        value: router.query.id,
                                      },
                                    })
                              );
                              toast.success(res.data.shopFollower.message, {
                                theme: "colored",
                              });
                              getAllFollowers();
                            },
                            (error) => {
                              toast.error(error.message, { theme: "colored" });
                            }
                          );
                        } else {
                          setOpen(true), setAuthTypeModal(AuthTypeModal.Signin);
                        }
                      }}
                    >
                      <Typography color="#FFFFFF">Follow</Typography>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 items-center justify-end flex my-5">
            <Button
              variant="contained"
              className={`rounded-xl bg-colorPrimary hover:bg-colorPrimary !flex !items-center !justify-center capitalize`}
            >
              <Typography color="#FFFFFF">See Branches</Typography>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6 container">
        <div className="bg-[#F5F5F5] rounded-xl p-4 text-center">
          <p className="text-colorPrimary font-bold">TOTAL PRODUCTS</p>
          <p className=" text-colorBlack font-bold text-center mt-2">
            {totalProducts}
          </p>
        </div>

        <div className="bg-[#F5F5F5] rounded-xl p-4 text-center">
          <p className="text-colorPrimary font-bold">FOLLOWERS</p>
          <p className=" text-colorBlack font-bold text-center mt-2">
            {totalFollowers}
          </p>
        </div>
        <div className="bg-[#F5F5F5] rounded-xl p-4 text-center">
          <p className="text-colorPrimary font-bold">REVIEWS</p>
          <p className=" text-colorBlack font-bold text-center mt-2">
            {totalReview}
          </p>
        </div>
        <div className="bg-[#F5F5F5] rounded-xl p-4 text-center">
          <p className="text-colorPrimary font-bold">SHARE</p>
          <p className=" text-colorBlack font-bold text-center mt-2">25</p>
        </div>
      </div>

      <AuthModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        authTypeModal={authTypeModal}
        setAuthTypeModal={setAuthTypeModal}
      />
    </>
  );
};

export default ShopHeaderSection;
