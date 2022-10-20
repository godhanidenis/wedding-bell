import React from "react";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CardInteractive from "../CardInteractive/CardInteractive";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ProductColorFilter = () => {
  const colorsList = [
    { label: "Red", value: "red" },
    { label: "Pink", value: "pink" },
    { label: "Yellow", value: "yellow" },
    { label: "Wine", value: "wine" },
    { label: "Purple", value: "purple" },
    { label: "Blue", value: "blue" },
    { label: "Orange", value: "orange" },
  ];
  return (
    <CardInteractive
      cardTitle="Colors"
      bottomComponent={
        <>
          <Autocomplete
            multiple
            options={colorsList}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Colors" placeholder="color" />
            )}
          />
        </>
      }
    />
  );
};

export default ProductColorFilter;
