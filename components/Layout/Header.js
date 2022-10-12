import Image from "next/image";
import Link from "next/link";
import Logout from "@mui/icons-material/Logout";

import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Badge from "@mui/material/Badge";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import AuthModal from "../core/AuthModal";
import ProfileIcon from "../../assets/profile.png";
import { AuthTypeModal } from "../core/Enum";

import {
  Avatar,
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import SubHeader from "./SubHeader";

const Locations = ["Kamrej", "Adajan", "Mota Varachha", "JakatNaka"];

const Header = () => {
  const [headerClasses, setHeaderClasses] = useState("bg-colorPrimary");
  const [open, setOpen] = useState(false);
  const [authTypeModal, setauthTypeModal] = useState();
  const [accessToken, setAccessToken] = useState();
  const changeHeader = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 20
        ? setHeaderClasses("bg-colorPrimary shadow-sm")
        : setHeaderClasses("bg-colorPrimary");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeHeader);

    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  });

  useEffect(() => {
    const getAccessToken = localStorage.getItem("token");
    setAccessToken(getAccessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof window !== "undefined" && localStorage.getItem("token")]);

  return (
    <>
      <header
        className={`py-4 fixed w-full left-0 top-0 z-20 transition-all ${headerClasses}`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <Link href="/">
              <div className="cursor-pointer">
                <h2 className="text-2xl font-normal uppercase cursor-pointer text-colorWhite">
                  <span className="text-4xl">W</span>edding
                  <span className="text-4xl">B</span>ell
                </h2>
                {/* <Image src={HeaderLogo} alt="Wedding Bell Logo" layout="fill" /> */}
              </div>
            </Link>
            <Autocomplete
              disablePortal
              options={Locations}
              sx={{
                width: 150,
                background: "white",
                borderRadius: "5px",
              }}
              renderInput={(params) => (
                <TextField
                  placeholder="Locations"
                  {...params}
                  variant="outlined"
                />
              )}
            />
          </div>

          <div className="flex items-center gap-5 xl:gap-12">
            <ul className="flex">
              <li>
                <FormControl
                  sx={{
                    width: 250,
                    background: "white",
                    borderRadius: "5px",
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    placeholder="Search...."
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </li>
            </ul>

            <ul className="flex items-center gap-3">
              <li>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <FavoriteBorderOutlinedIcon
                      sx={{ color: "white" }}
                      fontSize="large"
                    />
                  </Badge>
                </IconButton>
              </li>
              <li>
                {!accessToken && (
                  <div
                    className="flex text-colorWhite cursor-pointer"
                    onClick={() => {
                      setOpen(true), setauthTypeModal(AuthTypeModal.Signin);
                    }}
                  >
                    <p className="underline hover:scale-105">SingIn / SignUp</p>
                  </div>
                )}
                {accessToken && (
                  <>
                    <UserProfile setAccessToken={setAccessToken} />
                  </>
                )}
              </li>
            </ul>
            <AuthModal
              open={open}
              handleClose={() => {
                setOpen(false);
              }}
              authTypeModal={authTypeModal}
              setauthTypeModal={setauthTypeModal}
            />
          </div>
        </div>
      </header>
      <SubHeader />
    </>
  );
};

export default Header;

const UserProfile = ({ setAccessToken }) => {
  const [anchorElUser, setAnchorElUser] = useState(false);
  const anchorRef = useRef(null);
  const handleProfileToggle = () => {
    setAnchorElUser((prevOpen) => !prevOpen);
  };

  const handleProfileClose = () => {
    setAnchorElUser(false);
  };

  return (
    <>
      <div
        ref={anchorRef}
        onClick={handleProfileToggle}
        className="flex items-center justify-between gap-4 cursor-pointer"
      >
        <Avatar>
          <Image src={ProfileIcon} alt="ProfileIcon" layout="fill" />
        </Avatar>
        <span className="font-semibold hidden sm:flex text-colorWhite">
          Denis Godhani
        </span>

        <KeyboardArrowDownIcon className="hidden sm:flex text-colorWhite" />
      </div>
      <Popper
        open={anchorElUser}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
        transition
        disablePortal
        className="z-20"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-end" ? "left top" : "left bottom",
            }}
          >
            <Paper
              sx={{
                boxShadow: "none",
                overflow: "visible",
                mt: "5px !important",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              }}
            >
              <ClickAwayListener onClickAway={handleProfileClose}>
                <MenuList autoFocusItem={anchorElUser}>
                  <div className="flex flex-col mx-4 my-2 items-center">
                    <Avatar className="mb-2 !w-14 !h-14">
                      <Image src={ProfileIcon} alt="ProfileIcon" />
                    </Avatar>
                    <b>Denis Godhani</b>
                    <span className="font-medium text-base">
                      godhanidenis@gmail.com
                    </span>
                  </div>

                  <Divider />

                  <MenuItem
                    onClick={() => {
                      localStorage.clear();
                      setAccessToken("");
                      handleProfileClose();
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <Logout />
                      <span className="font-medium text-base">Logout</span>
                    </div>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
