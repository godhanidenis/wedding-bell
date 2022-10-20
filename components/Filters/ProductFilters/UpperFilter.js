import React, { useEffect, useState } from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { loadProductsStart } from "../../../redux/ducks/product";

const UpperFilter = ({ setPageSkip }) => {
  const [sortBy, setSortBy] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  const getFilterProducts = () => {
    dispatch(
      loadProductsStart({
        search: "",
        pageData: {
          skip: 0,
          limit: 6,
        },
        filter: {},
        pinCode: null,
        sort: sortBy,
      })
    );
  };
  useEffect(() => {
    if (sortBy !== "") {
      getFilterProducts();
      setPageSkip(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, dispatch]);
  return (
    <div className="py-3 px-6 bg-[#FFFFFF] mb-11 mt-10 flex justify-between">
      <div className="flex items-center gap-5">
        <GridViewOutlinedIcon className="text-black" />
        <ListOutlinedIcon className="text-black" fontSize="large" />
      </div>

      <div className="flex items-center gap-5">
        <p className="text-black font-semibold">Sort By:</p>
        <FormControl sx={{ minWidth: 100 }} size="small">
          <Select
            value={sortBy}
            onChange={handleChange}
            className="text-black font-semibold"
          >
            <MenuItem value="asc">Asc</MenuItem>
            <MenuItem value="desc">Desc</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default UpperFilter;
