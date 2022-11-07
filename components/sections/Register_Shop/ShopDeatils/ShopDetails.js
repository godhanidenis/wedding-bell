import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomTextField } from "../../../core/CustomMUIComponents";

const RegisterShop = () => {
  const [isSameAsManager, setIsSameAsManager] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
    getValues,
  } = useForm();

  return (
    <div className="m-5 flex justify-center items-center">
      <form action="/send-data-here" method="post">
        <div className="flex justify-center">
          <label for="ShopName" className="font-bold">
            Shop Details
          </label>
        </div>
        <CustomTextField
          id="input-with-sx"
          style={{ borderRadius: 10 }}
          label={"Shop Name"}
          variant="outlined"
          className="w-full border-colorSecondary mt-3"
          {...register("Shop Name", {
            required: "Shop Name",
          })}
        />
        {/* <TextField placeholder="ShopName" size='medium' variant="standard"  type="text" id="first" name="first" /> */}
        <CustomTextField
          id="input-with-sx"
          label={"adress"}
          rows={5}
          variant="outlined"
          className="w-full mt-3"
          {...register("adress", {
            required: "Shop Name",
          })}
        />
        <CustomTextField
          id="input-with-sx"
          label={"pincode"}
          variant="outlined"
          className="w-full mt-3"
          {...register("pincode", {
            required: "Shop Name",
          })}
        />
        <div className="mt-3">
          <input
            type="checkbox"
            name="same as manager"
            onChange={(e) => {
              setIsSameAsManager(!isSameAsManager);
            }}
          />
          <label htmlFor="checkall" className="ml-3">
            same as Owner
          </label>
        </div>

        <CustomTextField
          id="input-with-sx"
          label={"manager Name"}
          variant="outlined"
          className="w-full  mt-3"
          {...register("manager name", {
            required: "Shop Name",
          })}
          disabled={isSameAsManager ? true : false}
        />

        <CustomTextField
          id="input-with-sx"
          label={"contact"}
          variant="outlined"
          className="w-full  mt-3"
          {...register("contact", {
            required: "Shop Name",
          })}
          disabled={isSameAsManager ? true : false}
        />
      </form>
    </div>
  );
};

export default RegisterShop;
