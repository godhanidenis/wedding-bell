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

const ProductByShopFilter = () => {
  const shopsList = [
    { label: "All", value: "All" },
    { label: "MitVin", value: "MitVin" },
    { label: "WedMen", value: "WedMen" },
    { label: "KingsMen", value: "KingsMen" },
    { label: "GJ-5", value: "GJ-5" },
    { label: "Mahi", value: "Mahi" },
  ];
  return (
    <CardInteractive
      cardTitle="Shops"
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
            {shopsList.map((itm) => (
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

export default ProductByShopFilter;
