import { Paper, Popper, Tab } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HamburgerIcon from "../../assets/hamburger-icon.svg";
import { CustomTab, TabPanel } from "../core/CustomMUIComponents";

const SubHeader = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (index, event) => {
    const { currentTarget } = event;

    setOpen(true);
    setAnchorEl(currentTarget);
    setValue(index);
  };

  const handleMenuClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <div className="w-full left-0 top-[83px] sticky bg-colorWhite z-10 shadow-md">
      <div className="container flex gap-48 items-center">
        <button type="button" className="w-5 h-5 relative">
          <Image src={HamburgerIcon} alt="Hamburger Logo" layout="fill" />
        </button>
        <div onMouseLeave={handleMenuClose.bind(this)}>
          <CustomTab value={value}>
            {["Men's", "Women's"].map((item, index) => (
              <Tab
                key={index}
                onMouseEnter={handleMenuOpen.bind(this, index)}
                data-key={index}
                label={item}
                aria-owns={open ? "menu-list-grow" : undefined}
                aria-haspopup={"true"}
              />
            ))}
          </CustomTab>

          <Popper open={open} anchorEl={anchorEl} id="menu-list-grow">
            <Paper>
              <TabPanel value={value} index={0} className="p-6">
                <div className="flex justify-between gap-5">
                  <div>
                    <p className="font-semibold text-colorPrimary mb-4">
                      By Type
                    </p>
                    {["Men 1", "Men 2", "Men 3"].map((itm) => (
                      <p
                        key={itm}
                        className="text-colorBlack font-normal hover:font-semibold"
                      >
                        {itm}
                      </p>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-colorPrimary mb-4">
                      By Locality
                    </p>
                    {["Kamrej", "Adajan", "JakatNaka"].map((itm) => (
                      <p
                        key={itm}
                        className="text-colorBlack font-normal hover:font-semibold"
                      >
                        {itm}
                      </p>
                    ))}
                  </div>
                </div>
              </TabPanel>

              <TabPanel value={value} index={1} className="p-6">
                <div className="flex justify-between gap-5">
                  <div>
                    <p className="font-semibold text-colorPrimary mb-4">
                      By Type
                    </p>
                    {["Women 1", "Women 2", "Women 3"].map((itm) => (
                      <p
                        key={itm}
                        className="text-colorBlack font-normal hover:font-semibold"
                      >
                        {itm}
                      </p>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-colorPrimary mb-4">
                      By Locality
                    </p>
                    {["Kamrej", "Adajan", "JakatNaka"].map((itm) => (
                      <p
                        key={itm}
                        className="text-colorBlack font-normal hover:font-semibold"
                      >
                        {itm}
                      </p>
                    ))}
                  </div>
                </div>
              </TabPanel>
            </Paper>
          </Popper>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
