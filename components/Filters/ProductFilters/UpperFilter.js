import React, { useState } from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { FormControl, MenuItem, Select } from "@mui/material";

const UpperFilter = () => {
  const [age, setAge] = useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="py-3 px-6 bg-[#FFFFFF] mb-11 mt-10 flex justify-between">
      <div className="flex items-center gap-5">
        <GridViewOutlinedIcon className="text-black" />
        <ListOutlinedIcon className="text-black" fontSize="large" />
      </div>

      <div className="flex items-center gap-5">
        <p className="text-black font-semibold">Sort By:</p>
        <FormControl sx={{ minWidth: 150 }} size="small">
          <Select
            value={age}
            onChange={handleChange}
            className="text-black font-semibold"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default UpperFilter;
