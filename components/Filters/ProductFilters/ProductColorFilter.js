import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import CardInteractive from "../CardInteractive/CardInteractive";
import SearchIcon from "@mui/icons-material/Search";

const ProductColorFilter = () => {
  const colorsList = [
    { label: "All", value: "All" },
    { label: "Red", value: "Red" },
    { label: "Pink", value: "Pink" },
    { label: "Yellow", value: "Yellow" },
    { label: "Wine", value: "Wine" },
    { label: "Purple", value: "Purple" },
    { label: "Blue", value: "Blue" },
    { label: "Orange", value: "Orange" },
  ];
  return (
    <CardInteractive
      cardTitle="Colors"
      bottomComponent={
        <>
          <OutlinedInput
            className="w-full"
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
              }
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon className="hover:text-[#95539B]" />
                </IconButton>
              </InputAdornment>
            }
          />
          <FormGroup className="mt-4">
            {colorsList.map((itm) => (
              <FormControlLabel
                key={itm.value}
                control={<Checkbox />}
                label={itm.label}
                value={itm.value}
              />
            ))}
          </FormGroup>
        </>
      }
    />
  );
};

export default ProductColorFilter;
