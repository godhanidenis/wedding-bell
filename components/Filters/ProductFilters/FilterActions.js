import { useState } from "react";
import { Switch } from "@mui/material";

const FilterActions = ({ byShop, setByShop }) => {
  const [checked, setChecked] = useState(byShop);

  const switchHandler = (event) => {
    setChecked(event.target.checked);
    setByShop(event.target.checked);
  };

  return (
    <>
      <div className="mb-2 flex justify-start gap-5">
        <button className="bg-colorPrimary px-5 py-1 rounded-md text-colorWhite">
          Filter By
        </button>

        <button className="bg-colorPrimary px-5 py-1 rounded-md text-colorWhite">
          Reset
        </button>
      </div>
      <div className="flex items-center gap-2">
        <p>Filter By Product</p>
        <Switch checked={checked} onChange={switchHandler} />
        <p>Filter By Shop</p>
      </div>
    </>
  );
};

export default FilterActions;
