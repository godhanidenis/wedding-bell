import { Chip } from "@mui/material";
import React from "react";

const SelectedFilters = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {["abc", "xyz", "Blazer", "Choli", "Kurta"].map((itm) => (
        <Chip
          label={itm}
          key={itm}
          onDelete={() => alert("ok!!")}
          className="text-colorBlack font-semibold"
        />
      ))}
    </div>
  );
};

export default SelectedFilters;
