import React from "react";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CardInteractive from "../CardInteractive/CardInteractive";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useSelector } from "react-redux";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ShopByLocation = () => {
  const { areaLists } = useSelector((state) => state.areaLists);

  return (
    <CardInteractive
      cardTitle="Locations"
      bottomComponent={
        <>
          <Autocomplete
            multiple
            options={areaLists}
            disableCloseOnSelect
            getOptionLabel={(option) => option.area}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.area}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Area Location"
                placeholder="Location"
              />
            )}
          />
        </>
      }
    />
  );
};

export default ShopByLocation;
