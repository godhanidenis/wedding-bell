import React from "react";
import { CustomTextField } from "../../../core/CustomMUIComponents";

const SocialMediaComponent = () => {
  return (
    <div>
      <CustomTextField
        id="input-with-sx"
        label={"facebook"}
        variant="standard"
        className="w-full"
      />
      <CustomTextField
        id="input-with-sx"
        label={"instragra"}
        variant="standard"
        className="w-full"
      />
      <CustomTextField
        id="input-with-sx"
        label={"website"}
        variant="standard"
        className="w-full"
      />
    </div>
  );
};

export default SocialMediaComponent;
