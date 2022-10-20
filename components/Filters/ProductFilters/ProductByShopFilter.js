import React from "react";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CardInteractive from "../CardInteractive/CardInteractive";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useSelector } from "react-redux";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ProductByShopFilter = () => {
  const { shops } = useSelector((state) => state.shops);
  return (
    <CardInteractive
      cardTitle="Shops"
      bottomComponent={
        <>
          <Autocomplete
            multiple
            options={shops}
            disableCloseOnSelect
            getOptionLabel={(option) => {
              const a = option.branch_info.filter(
                (itm) => itm.branch_type === "main"
              );
              return a[0].branch_name;
            }}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.branch_info.map((itm) =>
                  itm.branch_type === "main" ? itm.branch_name : ""
                )}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Shops" placeholder="Shop Name" />
            )}
          />
        </>
      }
    />
  );
};

export default ProductByShopFilter;
