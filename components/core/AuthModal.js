import * as React from "react";
import Box from "@mui/material/Box";
import SignIn from "../sections/auth-section/signin";
import SignUp from "../sections/auth-section/signup";
import { AuthTypeModal } from "./Enum";
import { CustomAuthModal } from "./CustomMUIComponents";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "1200px",
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  borderRadius: "12px",
  height: "auto",
};

const AuthModal = (props) => {
  const { open, handleClose, authTypeModal, setauthTypeModal } = props;

  return (
    <CustomAuthModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="animate__animated animate__slideInDown"
    >
      <Box sx={style}>
        {authTypeModal === AuthTypeModal.Signin && (
          <SignIn
            changeAuthModalType={setauthTypeModal}
            handleClose={handleClose}
          />
        )}
        {authTypeModal === AuthTypeModal.Signup && (
          <SignUp
            changeAuthModalType={setauthTypeModal}
            handleClose={handleClose}
          />
        )}
      </Box>
    </CustomAuthModal>
  );
};

export default AuthModal;
