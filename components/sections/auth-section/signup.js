import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginLogo from "../../../assets/LoginLogo.svg";
import googleIcon from "../../../assets/googleIcon.svg";
import fbIcon from "../../../assets/fbIcon.svg";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
import { CustomTextField } from "../../core/CustomMUIComponents";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { AuthTypeModal } from "../../core/Enum";
import { useMutation } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { toast } from "react-toastify";
import { signUp } from "../../../graphql/mutations/authMutations";

export default function SignUp({ changeAuthModalType, handleClose }) {
  const [asVendor, setAsVendor] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    signUp(
      asVendor
        ? {
            first_name: data.first_name,
            last_name: data.last_name,
            user_contact: data.user_contact,
            user_password: data.user_password,
            user_type: "vendor",
            user_email: data.user_email,
          }
        : {
            first_name: data.first_name,
            last_name: data.last_name,
            user_contact: data.user_contact,
            user_password: data.user_password,
            user_type: "customer",
          }
    ).then(
      (res) => {
        toast.success(res.data.signUp.message, { theme: "colored" });
        localStorage.setItem("token", res.data.signUp.token);
        localStorage.setItem("userId", res.data.signUp.user);
        handleClose();
      },
      (error) => {
        setLoading(false);
        toast.error(error.message, { theme: "colored" });
      }
    );
  };
  const onError = (errors) => console.log("Errors Occurred !! :", errors);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
        <div className="p-4 hidden sm:block h-full">
          <div className="auth-cover !bg-cover w-full h-full text-center">
            {/* <Image src={LoginLogo} alt="CoverImage" /> */}
          </div>
        </div>
        <div className="p-4 ml-0 sm:ml-4 md:ml-4 lg:ml-12 ">
          <div className="flex">
            <h3 className="font-semibold text-xl sm:text-2xl text-colorPrimary ml-8 sm:ml-0">
              {asVendor ? "Sign up As a Vendor!" : "Sign up to WeddingBell!"}
            </h3>
            <CloseIcon
              className="text-black ml-auto cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <div className="mt-4 sm:mt-4">
            <form onSubmit={handleSubmit(onSubmit, onError)} onReset={reset}>
              <div className="flex flex-col">
                <div className="flex sm:block justify-center">
                  <div className="flex gap-5 mb-2 w-[85%] md:w-5/6 lg:w-3/4 justify-between">
                    <div>
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PersonIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
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
                      <div className="mt-2 ml-9">
                        {errors.first_name && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.first_name?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <PersonIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
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
                      <div className="mt-2 ml-9">
                        {errors.last_name && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.last_name?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex sm:block justify-center">
                  <div className="flex  sm:block flex-col mb-4 w-[85%] md:w-5/6 lg:w-3/4">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <PhoneIcon
                        sx={{ mr: 2, my: 0.5 }}
                        className="text-black"
                      />
                      <CustomTextField
                        id="input-with-sx"
                        label="Contact Number"
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
                    <div className="mt-2 ml-9">
                      {errors.user_contact && (
                        <span style={{ color: "red" }} className="-mb-6">
                          {errors.user_contact?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {asVendor && (
                  <div className="flex sm:block justify-center">
                    <div className="flex  sm:block flex-col mb-4 w-[85%] md:w-5/6 lg:w-3/4">
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <EmailIcon
                          sx={{ mr: 2, my: 0.5 }}
                          className="text-black"
                        />
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
                      <div className="mt-2 ml-9">
                        {errors.user_email && (
                          <span style={{ color: "red" }} className="-mb-6">
                            {errors.user_email?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex sm:block justify-center">
                  <div className="flex  sm:block flex-col mb-4 w-[85%] md:w-5/6 lg:w-3/4">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <LockIcon
                        sx={{ mr: 2, my: 0.5 }}
                        className="text-black"
                      />
                      <CustomTextField
                        type={showPassword ? "text" : "password"}
                        id="input-with-sx"
                        label="Password"
                        variant="standard"
                        className="w-full"
                        {...register("user_password", {
                          required: "Password is required",
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="start"
                              className="cursor-pointer"
                              onClick={() => setShowPassword((show) => !show)}
                            >
                              {!showPassword ? (
                                <VisibilityOffIcon />
                              ) : (
                                <RemoveRedEyeIcon />
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <div className="mt-2 ml-9">
                      {errors.user_password && (
                        <span style={{ color: "red" }} className="-mb-6">
                          {errors.user_password?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex sm:block justify-center">
                  <div className="flex  sm:block flex-col mb-6 w-[85%] md:w-5/6 lg:w-3/4">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <LockIcon
                        sx={{ mr: 2, my: 0.5 }}
                        className="text-black"
                      />
                      <CustomTextField
                        type={showConfirmPassword ? "text" : "password"}
                        id="input-with-sx"
                        label="Confirm Password"
                        variant="standard"
                        className="w-full"
                        {...register("confirm_password", {
                          validate: (value) => {
                            const { user_password } = getValues();
                            return (
                              user_password === value ||
                              "Passwords does not match!"
                            );
                          },
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="start"
                              className="cursor-pointer"
                              onClick={() =>
                                setShowConfirmPassword((show) => !show)
                              }
                            >
                              {!showConfirmPassword ? (
                                <VisibilityOffIcon />
                              ) : (
                                <RemoveRedEyeIcon />
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <div className="mt-2 ml-9">
                      {errors.confirm_password && (
                        <span style={{ color: "red" }} className="-mb-6">
                          {errors.confirm_password?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center sm:block">
                  <button
                    type="submit"
                    className="bg-colorPrimary hover:bg-colorPrimary text-gray-100 p-4 w-[85%] md:w-5/6 lg:w-3/4 rounded-xl tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline 
                  shadow-lg flex items-center justify-center"
                  >
                    {loading && (
                      <CircularProgress
                        size={20}
                        color="primary"
                        sx={{ color: "white", mr: 1 }}
                      />
                    )}
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center sm:block">
              <div className="mt-4 sm:mt-6 gap-6 justify-between items-center flex-row  w-[85%] md:w-5/6 lg:w-3/4 block xl:flex">
                <button className="pt-3 pb-3 pr-2 pl-2 w-full focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border">
                  <div className="flex justify-center items-center mr-3">
                    <Image
                      src={googleIcon}
                      alt="back"
                      width={20}
                      height={20}
                      layout="fixed"
                    />
                  </div>
                  <span className="text-black whitespace-nowrap">
                    Login with Google
                  </span>
                </button>

                <button className="pt-3 pb-3 pr-2 pl-2 w-full focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center inline-flex items-center justify-center border mt-4 xl:mt-0">
                  <div className="flex justify-center items-center mr-3">
                    <Image
                      src={fbIcon}
                      alt="back"
                      width={20}
                      height={20}
                      layout="fixed"
                    />
                  </div>
                  <span className="text-black whitespace-nowrap">
                    Login with Facebook
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-center sm:justify-between items-center mb-4  w-full md:w-5/6 lg:w-3/4 mt-4 sm:mt-4  text-center">
              <div className="ml-0 sm:ml-auto">
                <span className="text-black">Already have an account?</span>
                <span
                  className="cursor-pointer text-colorPrimary ml-1 font-bold"
                  onClick={() => changeAuthModalType(AuthTypeModal.Signin)}
                >
                  Login
                </span>
              </div>
            </div>

            <div className="border-2 border-dashed rounded py-2 px-1 flex justify-center items-center w-full md:w-5/6 lg:w-3/4 mt-4 sm:mt-4 text-center">
              <span className="text-black">
                {asVendor ? "Are you a customer ?" : "Are you a Vendor ?"}
              </span>
              <button
                className="cursor-pointer text-colorWhite bg-colorPrimary py-2 px-3 rounded ml-2"
                onClick={(e) => setAsVendor(!asVendor)}
              >
                {asVendor ? "Customer" : "Business"} Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
